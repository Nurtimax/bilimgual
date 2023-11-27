import { Button, Card, CardActions, CardHeader } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';

import FooterFAQEditList from '../../footer/FooterFAQEditList';

export interface IFAQValues {
   answer?: string;
   question?: string;
   id?: string;
}

const MainAdminFooter = () => {
   const { setValues, values } = useFormik<IFAQValues[]>({
      initialValues: [{ answer: '', question: '', id: '1' }],
      onSubmit: () => {}
   });

   const addNewFields = () => {
      setValues((prev) => [...prev, { answer: '', question: '', id: String(Math.round(Math.random() * 1000000)) }]);
   };

   return (
      <Card sx={{ background: 'inherit' }} elevation={0}>
         <CardHeader title="FAQ:" titleTypographyProps={{ sx: { color: 'white' } }} />
         <FooterFAQEditList setValues={setValues} values={values} />
         <CardActions>
            <Button color="success" onClick={addNewFields}>
               Add Field
            </Button>
            <Button color="warning" onClick={addNewFields}>
               Save
            </Button>
            <Button variant="contained" onClick={addNewFields}>
               Change
            </Button>
         </CardActions>
      </Card>
   );
};

export default MainAdminFooter;
