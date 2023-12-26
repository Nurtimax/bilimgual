import React, { FormEvent, useEffect } from 'react';
import { Button, FormLabel, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';

import Card from '../../UI/card';
import { useAppDispatch } from '../../../store/hooks';
import { getTestByIdThunk, putTestByIdThunk } from '../../../store/thunks/admin-test';
import { InitialStateTest } from '../../../types/admin-test';

const MainAdminTestAdd = () => {
   const { query, push, back } = useRouter();
   const dispatch = useAppDispatch();

   const { values, errors, handleChange, handleSubmit, setValues } = useFormik<InitialStateTest>({
      initialValues: {
         title: '',
         shortDescription: '',
         id: '',
         active: false,
         questions: []
      },
      onSubmit: (values) => {
         dispatch(putTestByIdThunk({ ...values, id: query.add as string }))
            .unwrap()
            .then(() => {
               push(`/admin/tests/${query?.add}/variants`);
            });
      }
   });

   useEffect(() => {
      dispatch(getTestByIdThunk(query?.add as string))
         .unwrap()
         .then((payload) => {
            setValues(payload);
         });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch]);

   const handleSave = () => {
      dispatch(putTestByIdThunk({ ...values, id: query.add as string }));
   };

   return (
      <Card
         cardProps={{
            sx: { width: '80%', margin: '0 auto', px: '80px', py: '50px', borderRadius: '20px' },
            component: 'form',
            onSubmit: (e) => {
               const event = e as unknown as FormEvent<HTMLFormElement>;
               handleSubmit(event);
            }
         }}
         contentProps={{
            sx: {
               display: 'grid',
               gap: '24px'
            },
            children: (
               <>
                  <Stack gap={1}>
                     <FormLabel sx={{ color: '#4B4759' }} error={!!errors.title}>
                        Title
                     </FormLabel>
                     <TextField
                        fullWidth
                        id="title"
                        name="title"
                        onChange={handleChange}
                        value={values.title}
                        error={!!errors.title}
                        helperText={errors.title && errors.title}
                     />
                  </Stack>
                  <Stack gap={1}>
                     <FormLabel sx={{ color: '#4B4759' }} error={!!errors.shortDescription}>
                        Short Description
                     </FormLabel>
                     <TextField
                        fullWidth
                        id="shortDescription"
                        name="shortDescription"
                        onChange={handleChange}
                        value={values.shortDescription}
                        error={!!errors.shortDescription}
                        helperText={errors.shortDescription && errors.shortDescription}
                     />
                  </Stack>
               </>
            )
         }}
         actionProps={{
            children: (
               <Stack direction="row" gap={2} justifyContent="flex-end" width="100%">
                  <Button variant="login" type="button" onClick={back}>
                     GO BACK
                  </Button>
                  <Button variant="contained" color="success" type="button" onClick={handleSave}>
                     SAVE
                  </Button>
                  {values.shortDescription && values.title && (
                     <Button variant="contained" startIcon={<AddIcon />} type="submit">
                        ADD QUESTIONS
                     </Button>
                  )}
               </Stack>
            )
         }}
      />
   );
};

export default MainAdminTestAdd;
