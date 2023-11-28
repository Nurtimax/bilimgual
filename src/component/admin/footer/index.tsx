import { Button, Card, CardActions } from '@mui/material';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import FooterFAQEditList from '../../footer/FooterFAQEditList';
import axiosInctanse from '../../../utils/helpers/axiosInstance';
import CircularLoading from '../../loading';

// Define the Yup validation schema
const validationSchema = Yup.object().shape({
   values: Yup.array()
      .of(
         Yup.object().shape({
            answer: Yup.string().required('Answer is required'),
            question: Yup.string().required('Question is required'),
            id: Yup.string()
         })
      )
      .length(20)
});

export interface IFAQValues {
   answer?: string;
   question?: string;
   id?: string;
}

const MainAdminFooter: FC = memo(() => {
   const [loading, setLoading] = useState(false);

   const { setValues, values, errors } = useFormik<IFAQValues[]>({
      initialValues: [{ answer: '', question: '', id: '1' }],
      onSubmit: () => {},
      validationSchema
   });

   const addNewFields = () => {
      setValues((prev) => [...prev, { answer: '', question: '', id: String(Math.round(Math.random() * 1000000)) }]);
   };

   const removeFields = (id: string) => {
      setValues((prev) => prev.filter((el) => el.id !== id));
   };

   const getValues = useCallback(async () => {
      setLoading(true);
      try {
         const response = await axiosInctanse.get('footer_faq/admin.json');

         const data = Array.isArray(response.data) ? response.data : [{ answer: '', question: '', id: '1' }];

         setValues(data);
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         }
      }
      setLoading(false);
   }, [setValues]);

   const saveValues = async () => {
      setLoading(true);

      try {
         await axiosInctanse.put(`footer_faq/admin.json`, values);

         getValues();
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         }
      }
      setLoading(false);
   };

   const changeValues = async () => {
      setLoading(true);

      try {
         await axiosInctanse.put(`footer_faq/users.json`, values);

         getValues();
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         }
      }
      setLoading(false);
   };

   useEffect(() => {
      getValues();
   }, [getValues]);

   const disabled = !!Object.keys(errors).length;

   return (
      <>
         {loading && <CircularLoading open />}

         <Card sx={{ background: 'inherit' }} elevation={0}>
            <FooterFAQEditList setValues={setValues} values={values} removeFields={removeFields} />

            <CardActions sx={{ justifyContent: 'flex-end', pb: 4 }}>
               <Button color="success" onClick={addNewFields} disabled={values.length === 20}>
                  Add Field
               </Button>
               <Button color="warning" onClick={saveValues} disabled={disabled}>
                  Save
               </Button>
               <Button variant="contained" onClick={changeValues} disabled={disabled}>
                  Change
               </Button>
            </CardActions>
         </Card>
      </>
   );
});

export default MainAdminFooter;
