import { Button, Checkbox, FormControlLabel, FormGroup, TextField, styled } from '@mui/material';
import { FormikErrors, FormikHelpers, useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';

import LoginAlert from '../UI/login/Alert';
import { auth } from '../../firebase';

const validationSchema = yup.object().shape({
   email: yup.string().email('Invalid email format').required('Email is required').max(100).min(3),
   password: yup
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required')
      .max(100)
});

const StyledForms = styled('form')`
   display: grid;
   gap: 20px;
`;

interface ISignUpValues {
   email: string;
   password: string;
   afterSubmit: Error;
}

const onSubmit = async (values: ISignUpValues, formikHelpers: FormikHelpers<ISignUpValues>) => {
   try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      formikHelpers.resetForm();
   } catch (error) {
      const newErrors: FormikErrors<ISignUpValues> = {
         afterSubmit: { message: '', name: '' },
         email: '',
         password: ''
      };

      formikHelpers.setErrors(newErrors);
   }
};

const Forms = () => {
   const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormik({
      initialValues: {
         email: '',
         password: '',
         afterSubmit: {
            name: '',
            message: ''
         }
      },
      onSubmit,
      validationSchema
   });

   return (
      <StyledForms onSubmit={handleSubmit}>
         <TextField
            fullWidth
            onChange={handleChange}
            name="email"
            value={values.email}
            helperText={errors.email}
            error={!!errors.email}
            label="Email"
         />
         <TextField
            fullWidth
            onChange={handleChange}
            name="password"
            type="password"
            value={values.password}
            helperText={errors.password}
            error={!!errors.password}
            label="Password"
         />
         <FormGroup>
            <FormControlLabel
               required
               control={<Checkbox />}
               label="To remember me"
               componentsProps={{
                  typography: {
                     variant: 'body3'
                  }
               }}
            />
         </FormGroup>

         {errors.afterSubmit?.message && (
            <LoginAlert message={errors.afterSubmit.message} errorName={errors.afterSubmit.name} />
         )}

         <Button variant="login" type="submit" fullWidth disabled={isSubmitting}>
            SIGN IN
         </Button>
      </StyledForms>
   );
};

export default Forms;
