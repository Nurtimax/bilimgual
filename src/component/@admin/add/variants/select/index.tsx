import React, { FormEvent } from 'react';
import { Button, SelectChangeEvent, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import dayjs from 'dayjs';

import Card from '../../../../UI/card';
import { TestType } from '../../../../TestByType';

import VariantsSelectFields from './VariantsSelectFields';

type TCustomTestType = TestType | '';

export interface IFormikInitialValuesFields {
   type: TCustomTestType;
   duration: dayjs.Dayjs | null;
   title: string;
}

export interface IFormikInitialValuesSelectedType {
   type: TCustomTestType;
}

export interface IFormikInitialValues {
   fields: IFormikInitialValuesFields;
   selectedType: IFormikInitialValuesSelectedType;
}

const MainAdminTestAddVariantsSelect = () => {
   const { values, setValues, handleSubmit, handleChange, isValid, dirty, errors } = useFormik<IFormikInitialValues>({
      initialValues: {
         fields: {
            type: '',
            duration: dayjs(null),
            title: ''
         },
         selectedType: {
            type: ''
         }
      },
      onSubmit: (values, { setFieldValue }) => {
         setFieldValue('selectedType', { type: values.fields.type });
      }
   });

   const handleChangeType = (event: SelectChangeEvent) => {
      const value = event.target.value as TestType;
      setValues((prev) => ({ ...prev, type: value }));
   };

   const handleChangeDuration = (value: dayjs.Dayjs | null) => {
      setValues((prev) => ({ ...prev, duration: value }));
   };

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
                  typeValue={values.fields.type}
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
                  {values.selectedType.type && (
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
