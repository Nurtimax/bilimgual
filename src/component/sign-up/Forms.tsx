import { Button, TextField, styled } from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import React from 'react';

const StyledForms = styled('form')`
   display: grid;
   gap: 20px;
`;

interface ISignUpValues {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
}

const onSubmit = (values: ISignUpValues, formikHelpers: FormikHelpers<ISignUpValues>) => {
   console.log(values);
   formikHelpers.resetForm();
};

const Forms = () => {
   const { values, errors, handleChange, handleSubmit } = useFormik({
      initialValues: {
         email: '',
         firstName: '',
         lastName: '',
         password: ''
      },
      onSubmit
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
         />
         <TextField
            fullWidth
            onChange={handleChange}
            value={values.lastName}
            name="lastName"
            label="Last name"
            helperText={errors.lastName}
         />
         <TextField
            fullWidth
            onChange={handleChange}
            value={values.email}
            name="email"
            label="Email"
            helperText={errors.email}
         />
         <TextField
            fullWidth
            onChange={handleChange}
            value={values.password}
            name="password"
            label="Password"
            helperText={errors.password}
         />

         <Button variant="login" type="submit" fullWidth>
            SIGN UP
         </Button>
      </StyledForms>
   );
};

export default Forms;
