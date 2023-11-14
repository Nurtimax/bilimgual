import { Button, Card, CardActions, CardContent, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { memo } from 'react';

import validationSchema from './validate';

const Forms = memo(() => {
   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
         fullName: '',
         email: '',
         phoneNumber: '',
         country: '',
         stateRegion: '',
         city: '',
         address: '',
         zipCode: '',
         company: '',
         role: '',
         github: '',
         telegram: '',
         instagram: '',
         linkedin: '',
         portfolio: '',
         youtube: '',
         facebook: ''
      },
      onSubmit: (values) => {
         console.log(values);
      },
      validationSchema,
      validateOnChange: false
   });
   return (
      <Card component="form" onSubmit={handleSubmit}>
         <CardContent sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
            <TextField
               fullWidth
               helperText={errors.fullName && errors.fullName}
               error={!!errors.fullName}
               onChange={handleChange}
               name="fullName"
               value={values.fullName}
               label="Full Name"
               required
            />
            <TextField
               fullWidth
               helperText={errors.email && errors.email}
               error={!!errors.email}
               onChange={handleChange}
               name="email"
               value={values.email}
               label="Email Address"
               required
            />
            <TextField
               fullWidth
               helperText={errors.phoneNumber && errors.phoneNumber}
               error={!!errors.phoneNumber}
               onChange={handleChange}
               name="phoneNumber"
               value={values.phoneNumber}
               label="Phone Number"
            />
            <TextField
               fullWidth
               helperText={errors.country && errors.country}
               error={!!errors.country}
               onChange={handleChange}
               name="country"
               value={values.country}
               label="Country"
               required
            />
            <TextField
               fullWidth
               helperText={errors.stateRegion && errors.stateRegion}
               error={!!errors.stateRegion}
               onChange={handleChange}
               name="stateRegion"
               value={values.stateRegion}
               label="State/Region"
            />
            <TextField
               fullWidth
               helperText={errors.city && errors.city}
               error={!!errors.city}
               onChange={handleChange}
               name="city"
               value={values.city}
               label="City"
               required
            />
            <TextField
               fullWidth
               helperText={errors.address && errors.address}
               error={!!errors.address}
               onChange={handleChange}
               name="address"
               value={values.address}
               label="Address"
            />
            <TextField
               fullWidth
               helperText={errors.zipCode && errors.zipCode}
               error={!!errors.zipCode}
               onChange={handleChange}
               name="zipCode"
               value={values.zipCode}
               label="Zip/Code"
            />
            <TextField
               fullWidth
               helperText={errors.company && errors.company}
               error={!!errors.company}
               onChange={handleChange}
               name="company"
               value={values.company}
               label="Company"
               required
            />
            <TextField
               fullWidth
               helperText={errors.role && errors.role}
               error={!!errors.role}
               onChange={handleChange}
               name="role"
               value={values.role}
               label="Role"
               required
            />
            <TextField
               fullWidth
               helperText={errors.github && errors.github}
               error={!!errors.github}
               onChange={handleChange}
               name="github"
               value={values.github}
               label="Github"
               required
            />
            <TextField
               fullWidth
               helperText={errors.telegram && errors.telegram}
               error={!!errors.telegram}
               onChange={handleChange}
               name="telegram"
               value={values.telegram}
               label="Telegram"
            />
            <TextField
               fullWidth
               helperText={errors.instagram && errors.instagram}
               error={!!errors.instagram}
               onChange={handleChange}
               name="instagram"
               value={values.instagram}
               label="Instagram"
            />
            <TextField
               fullWidth
               helperText={errors.linkedin && errors.linkedin}
               error={!!errors.linkedin}
               onChange={handleChange}
               name="linkedin"
               value={values.linkedin}
               label="LinkedIn"
            />
            <TextField
               fullWidth
               helperText={errors.portfolio && errors.portfolio}
               error={!!errors.portfolio}
               onChange={handleChange}
               name="portfolio"
               value={values.portfolio}
               label="Portfolio"
            />
            <TextField
               fullWidth
               helperText={errors.youtube && errors.youtube}
               error={!!errors.youtube}
               onChange={handleChange}
               name="youtube"
               value={values.youtube}
               label="Youtube"
            />
            <TextField
               fullWidth
               helperText={errors.facebook && errors.facebook}
               error={!!errors.facebook}
               onChange={handleChange}
               name="facebook"
               value={values.facebook}
               label="Facebook"
            />
         </CardContent>
         <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="contained" type="submit">
               Create User
            </Button>
         </CardActions>
      </Card>
   );
});

export default Forms;
