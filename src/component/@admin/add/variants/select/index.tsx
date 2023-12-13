import React from 'react';
import { Button, SelectChangeEvent, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import dayjs from 'dayjs';

import Card from '../../../../UI/card';
import { TestType } from '../../../../@client/tests/TestByType';

import VariantsSelectFields from './VariantsSelectFields';

interface IFormikInitialValues {
   type: TestType | '';
   duration: dayjs.Dayjs | null;
}

const MainAdminTestAddVariantsSelect = () => {
   const { values, setValues } = useFormik<IFormikInitialValues>({
      initialValues: {
         type: '',
         duration: dayjs(null)
      },
      onSubmit: () => {}
   });

   const handleChangeType = (event: SelectChangeEvent) => {
      const value = event.target.value as TestType;
      setValues((prev) => ({ ...prev, type: value }));
   };

   const handleChangeDuration = (value: dayjs.Dayjs | null) => {
      setValues((prev) => ({ ...prev, duration: value }));
   };

   return (
      <Card
         cardProps={{ sx: { width: '80%', margin: '0 auto', borderRadius: '20px', p: '30px 80px 50px' } }}
         contentProps={{
            children: (
               <VariantsSelectFields
                  handleChangeType={handleChangeType}
                  typeValue={values.type}
                  duration={values.duration}
                  handleChangeDuration={handleChangeDuration}
               />
            )
         }}
         actionProps={{
            children: (
               <Stack direction="row" justifyContent="flex-end" width="100%">
                  <Button variant="contained" startIcon={<AddIcon />} disabled={!values.type}>
                     ADD MORE QUESTIONS
                  </Button>
               </Stack>
            )
         }}
      />
   );
};

export default MainAdminTestAddVariantsSelect;
