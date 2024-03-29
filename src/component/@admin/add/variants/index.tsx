import React, { useEffect, useMemo } from 'react';
import { Button, Divider, IconButton, Stack, Switch, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';

import CustomTable, { ITableHeaders, ITableRow } from '../../../UI/table/CustomTable';
import { useAppDispatch } from '../../../../store/hooks';
import {
   createTestByIdVaraintsThunk,
   getTestByIdThunk,
   transformObjectToArray
} from '../../../../store/thunks/admin-test';
import { ICreateTestByIdVaraintsThunk, InitialStateTest } from '../../../../types/admin-test';

const tableHeaders: ITableHeaders[] = [
   { label: '#', rowKey: 'index' },
   { label: 'Name', rowKey: 'name' },
   { label: 'Duration', rowKey: 'duration' },
   { label: 'Question Type', rowKey: 'type' },
   { label: '', rowKey: 'actions' }
];

const MainAdminTestAddVariants = () => {
   const { back, query, push } = useRouter();
   const dispatch = useAppDispatch();

   const { values, setValues } = useFormik<InitialStateTest>({
      initialValues: {
         title: '',
         shortDescription: '',
         id: '',
         active: false,
         questions: []
      },
      onSubmit: () => {}
   });

   useEffect(() => {
      dispatch(getTestByIdThunk(query?.add as string))
         .unwrap()
         .then((payload) => {
            const newPayload = { ...payload, questions: transformObjectToArray(payload.questions) };
            setValues(newPayload);
         });

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch]);

   const tableRows: ITableRow[] = useMemo(
      () =>
         values.questions.map((question, i) => ({
            index: i,
            name: (
               <Typography
                  variant="body3"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => push(`/admin/tests/${query?.add}/variants/${question?.id}`)}
               >
                  {question.name || 'Question ' + i}
               </Typography>
            ),
            duration: question.duration,
            type: question.questionType,
            actions: (
               <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={3} py={2}>
                  <Switch id="ios" checked={question.active} />
                  <IconButton>
                     <EditNoteIcon />
                  </IconButton>
                  <IconButton color="error">
                     <DeleteIcon />
                  </IconButton>
               </Stack>
            )
         })),

      // eslint-disable-next-line react-hooks/exhaustive-deps
      [values.questions]
   );

   const handleCreateQuestion = () => {
      const newData: ICreateTestByIdVaraintsThunk = {
         id: query?.add as string,
         question: {
            id: '',
            name: '',
            duration: 0,
            questionType: 'select',
            active: false
         }
      };

      dispatch(createTestByIdVaraintsThunk(newData))
         .unwrap()
         .then((payload) => {
            push(`/admin/tests/${query?.add}/variants/${payload?.id}`);
         });
   };

   return (
      <>
         <CustomTable
            tableHeaders={tableHeaders}
            tableRows={tableRows}
            head={
               <Stack>
                  <Stack py="22px">
                     <Typography variant="body3">
                        Title: <span>{values.title}</span>
                     </Typography>
                     <Typography variant="body3">
                        Short Description: <span> {values.shortDescription} </span>
                     </Typography>
                     <Typography variant="body3">
                        Duration: <span>15:00</span>
                     </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="flex-end" py="22px">
                     <Button variant="contained" startIcon={<AddIcon />} onClick={handleCreateQuestion}>
                        ADD MORE QUESTIONS
                     </Button>
                  </Stack>
                  <Divider />
               </Stack>
            }
            footer={
               <Stack direction="row" justifyContent="flex-end" alignItems="flex-end">
                  <Button variant="login" onClick={back}>
                     GO BACK
                  </Button>
               </Stack>
            }
         />
      </>
   );
};

export default MainAdminTestAddVariants;
