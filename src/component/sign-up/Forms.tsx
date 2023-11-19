import { Button, IconButton, TextField, styled } from '@mui/material';
import { FormikErrors, FormikHelpers, useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import LoginAlert from '../UI/login/Alert';
import { auth, firestore } from '../../firebase';

const validationSchema = yup.object().shape({
   email: yup.string().email('Invalid email format').required('Email is required').max(100).min(3),
   firstName: yup.string().required('First name is required').max(100).min(3),
   lastName: yup.string().required('Last name is required').max(100).min(3),
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
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   afterSubmit: Error;
}

const onSubmit = async (values: ISignUpValues, formikHelpers: FormikHelpers<ISignUpValues>) => {
   try {
      const response = await createUserWithEmailAndPassword(auth, values.email, values.password);
      updateProfile(response.user, { displayName: `${values.firstName} ${values.lastName}` });

      await setDoc(doc(firestore, 'users', `${values.email}`), {
         role: 'USER',
         currentRole: 'USER',
         createdAt: new Date()
      });

      formikHelpers.resetForm();
   } catch (error) {
      const newErrors: FormikErrors<ISignUpValues> = {
         afterSubmit: { message: '', name: '' },
         firstName: '',
         lastName: '',
         email: '',
         password: ''
      };

      formikHelpers.setErrors(newErrors);
   }
};

const Forms = () => {
   const [passwordView, setPasswordView] = useState(false);

   const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormik({
      initialValues: {
         email: '',
         firstName: '',
         lastName: '',
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
            value={values.firstName}
            name="firstName"
            label="First name"
            helperText={errors.firstName}
            error={!!errors.firstName}
         />
         <TextField
            fullWidth
            onChange={handleChange}
            value={values.lastName}
            name="lastName"
            label="Last name"
            helperText={errors.lastName}
            error={!!errors.lastName}
         />
         <TextField
            fullWidth
            onChange={handleChange}
            value={values.email}
            name="email"
            label="Email"
            helperText={errors.email}
            error={!!errors.email}
         />
         <TextField
            fullWidth
            onChange={handleChange}
            value={values.password}
            name="password"
            label="Password"
            type={passwordView ? 'text' : 'password'}
            helperText={errors.password}
            error={!!errors.password}
            InputProps={{
               endAdornment: (
                  <IconButton size="small" onClick={() => setPasswordView((prev) => !prev)}>
                     {passwordView ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
               )
            }}
         />

         {errors.afterSubmit?.message && (
            <LoginAlert errorName={errors.afterSubmit.name} message={errors.afterSubmit.message} />
         )}

         <Button variant="login" type="submit" fullWidth disabled={isSubmitting}>
            SIGN UP
         </Button>
      </StyledForms>
   );
};

export default Forms;
