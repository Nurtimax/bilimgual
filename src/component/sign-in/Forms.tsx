import {
   Alert,
   Button,
   Checkbox,
   FormControlLabel,
   FormGroup,
   IconButton,
   Stack,
   Tab,
   Tabs,
   TextField,
   styled
} from '@mui/material';
import { FormikErrors, FormikHelpers, useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import LoginAlert from '../UI/login/Alert';
import { auth } from '../../firebase';
import CopyClipboard from '../UI/copy-clipboard';

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
   const [passwordView, setPasswordView] = useState(false);
   const [value, setValue] = useState('user');

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

   const handleChangeTab = (_: React.SyntheticEvent, newValue: 'admin' | 'user') => {
      setValue(newValue);
   };

   return (
      <StyledForms onSubmit={handleSubmit}>
         <Stack direction="row" gap={2}>
            <Tabs
               onChange={handleChangeTab}
               value={value}
               variant="scrollable"
               orientation="vertical"
               scrollButtons={false}
            >
               <Tab label="User" value="user" />
               <Tab label="Admin" value="admin" />
            </Tabs>

            <Alert severity="success" variant="filled" sx={{ width: '80%' }}>
               Use {value === 'admin' ? 'admin' : 'user'}
               <CopyClipboard
                  text={value === 'admin' ? 'administration@gmail.com' : 'username@gmail.com'}
                  type="email"
               />
               <CopyClipboard text="123123123" type="password" />
            </Alert>
         </Stack>

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
            type={passwordView ? 'text' : 'password'}
            value={values.password}
            helperText={errors.password}
            error={!!errors.password}
            label="Password"
            InputProps={{
               endAdornment: (
                  <IconButton size="small" onClick={() => setPasswordView((prev) => !prev)}>
                     {passwordView ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
               )
            }}
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
