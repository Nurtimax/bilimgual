import React, { FormEvent, useEffect } from 'react';
import { Button, SelectChangeEvent, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

import Card from '../../../../UI/card';
import TestByType, { TestType } from '../../../../TestByType';
import { useAppDispatch } from '../../../../../store/hooks';
import { getTestByIdVariantsSelectByIdThunk } from '../../../../../store/thunks/admin-test';
import { InitialStateTestQuestions } from '../../../../../types/admin-test';

import VariantsSelectFields from './VariantsSelectFields';

type TCustomTestType = TestType | '';

export interface IFormikInitialValuesSelectedType {
   type: TCustomTestType;
}

export interface IFormikInitialValues {
   fields: InitialStateTestQuestions;
   selectedType: IFormikInitialValuesSelectedType;
}

const MainAdminTestAddVariantsSelect = () => {
   const { query } = useRouter();
   const dispatch = useAppDispatch();

   const { values, setValues, handleSubmit, handleChange, isValid, dirty, errors } = useFormik<IFormikInitialValues>({
      initialValues: {
         fields: {
            duration: dayjs().add(0, 'second'),
            active: false,
            id: '',
            name: '',
            questionType: 'select',
            loading: false
         },
         selectedType: {
            type: ''
         }
      },
      onSubmit: (values, { setFieldValue }) => {
         setFieldValue('selectedType', { type: values.fields.questionType });
      }
   });

   const handleChangeType = (event: SelectChangeEvent) => {
      const value = event.target.value as TestType;

      setValues((prev) => ({
         ...prev,
         fields: {
            ...prev.fields,
            questionType: value
         }
      }));
   };

   const handleChangeDuration = (value: dayjs.Dayjs | null) => {
      setValues((prev) => ({ ...prev, duration: value }));
   };

   useEffect(() => {
      dispatch(getTestByIdVariantsSelectByIdThunk({ id: query?.add as string, selectId: query?.select as string }))
         .unwrap()
         .then((payload) => {
            setValues((prev) => ({ ...prev, fields: payload }));
         });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const disabledButton = !dirty || !isValid;

   return (
      <Card
         cardProps={{
            sx: { width: '80%', margin: '0 auto', borderRadius: '20px', p: '30px 80px 50px' },
            component: 'form',
            onSubmit: (e) => {
               const event = e as unknown as FormEvent<HTMLFormElement>;
               handleSubmit(event);
            }
         }}
         contentProps={{
            children: (
               <VariantsSelectFields
                  handleChangeType={handleChangeType}
                  typeValue={values.fields.questionType}
                  duration={values.fields.duration}
                  handleChangeDuration={handleChangeDuration}
                  errors={errors}
                  values={values}
                  handleChange={handleChange}
               />
            )
         }}
         actionProps={{
            children: (
               <>
                  {values.selectedType.type && values.selectedType.type === values.fields.questionType ? (
                     <Stack width="100%">
                        <Stack direction="row" justifyContent="flex-end" pb={3}>
                           <Button variant="contained" startIcon={<AddIcon />} disabled={disabledButton}>
                              add options
                           </Button>
                        </Stack>
                        <TestByType type={values.selectedType.type} variants="ADMIN" />
                        <Stack direction="row" justifyContent="flex-end" pt={3} gap={3}>
                           <Button variant="login">go back</Button>
                           <Button variant="contained" color="success" disabled={disabledButton}>
                              save
                           </Button>
                        </Stack>
                     </Stack>
                  ) : (
                     <Stack direction="row" justifyContent="flex-end" width="100%">
                        <Button variant="contained" type="submit" startIcon={<AddIcon />} disabled={disabledButton}>
                           ADD MORE QUESTIONS
                        </Button>
                     </Stack>
                  )}
               </>
            )
         }}
      />
   );
};

export default MainAdminTestAddVariantsSelect;
