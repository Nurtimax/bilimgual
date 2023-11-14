import { Button, Card, CardActions, CardContent, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC, FormEvent, memo } from 'react';

import { useAppDispatch } from '../../../store/hooks';
import { actionAdminCreateTeam } from '../../../store/slices/admin-create-team';
import { InitialStateTeamForms } from '../../../types/team';

import validationSchema from './validate';

interface IForms {
   initialValues?: InitialStateTeamForms;
}

const Forms: FC<IForms> = memo(({ initialValues }) => {
   const dispatch = useAppDispatch();

   const { values, handleChange, handleSubmit, errors, isSubmitting } = useFormik({
      initialValues: initialValues || {
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
         linkedIn: '',
         portfolio: '',
         youtube: '',
         facebook: ''
      },
      onSubmit: () => {},
      validationSchema,
      validateOnChange: false
   });

   const onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
      const key = e.target.name;
      const value = e.target.value;

      dispatch(actionAdminCreateTeam.changeValueWithKey({ key, value }));

      handleChange(e);
   };

   return (
      <Card
         component="form"
         onSubmit={(e) => {
            const event = e as unknown as FormEvent<HTMLFormElement>;
            handleSubmit(event);
         }}
      >
         <CardContent sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
            <TextField
               fullWidth
               helperText={errors.fullName && errors.fullName}
               error={!!errors.fullName}
               onChange={onChange}
               name="fullName"
               value={values.fullName}
               label="Full Name"
               required
            />
            <TextField
               fullWidth
               helperText={errors.email && errors.email}
               error={!!errors.email}
               onChange={onChange}
               name="email"
               value={values.email}
               label="Email Address"
               required
            />
            <TextField
               fullWidth
               helperText={errors.phoneNumber && errors.phoneNumber}
               error={!!errors.phoneNumber}
               onChange={onChange}
               name="phoneNumber"
               value={values.phoneNumber}
               label="Phone Number"
            />
            <TextField
               fullWidth
               helperText={errors.country && errors.country}
               error={!!errors.country}
               onChange={onChange}
               name="country"
               value={values.country}
               label="Country"
               required
            />
            <TextField
               fullWidth
               helperText={errors.stateRegion && errors.stateRegion}
               error={!!errors.stateRegion}
               onChange={onChange}
               name="stateRegion"
               value={values.stateRegion}
               label="State/Region"
            />
            <TextField
               fullWidth
               helperText={errors.city && errors.city}
               error={!!errors.city}
               onChange={onChange}
               name="city"
               value={values.city}
               label="City"
               required
            />
            <TextField
               fullWidth
               helperText={errors.address && errors.address}
               error={!!errors.address}
               onChange={onChange}
               name="address"
               value={values.address}
               label="Address"
            />
            <TextField
               fullWidth
               helperText={errors.zipCode && errors.zipCode}
               error={!!errors.zipCode}
               onChange={onChange}
               name="zipCode"
               value={values.zipCode}
               label="Zip/Code"
            />
            <TextField
               fullWidth
               helperText={errors.company && errors.company}
               error={!!errors.company}
               onChange={onChange}
               name="company"
               value={values.company}
               label="Company"
               required
            />
            <TextField
               fullWidth
               helperText={errors.role && errors.role}
               error={!!errors.role}
               onChange={onChange}
               name="role"
               value={values.role}
               label="Role"
               required
            />
            <TextField
               fullWidth
               helperText={errors.github && errors.github}
               error={!!errors.github}
               onChange={onChange}
               name="github"
               value={values.github}
               label="Github"
               required
            />
            <TextField
               fullWidth
               helperText={errors.telegram && errors.telegram}
               error={!!errors.telegram}
               onChange={onChange}
               name="telegram"
               value={values.telegram}
               label="Telegram"
            />
            <TextField
               fullWidth
               helperText={errors.instagram && errors.instagram}
               error={!!errors.instagram}
               onChange={onChange}
               name="instagram"
               value={values.instagram}
               label="Instagram"
            />
            <TextField
               fullWidth
               helperText={errors.linkedIn && errors.linkedIn}
               error={!!errors.linkedIn}
               onChange={onChange}
               name="linkedIn"
               value={values.linkedIn}
               label="LinkedIn"
            />
            <TextField
               fullWidth
               helperText={errors.portfolio && errors.portfolio}
               error={!!errors.portfolio}
               onChange={onChange}
               name="portfolio"
               value={values.portfolio}
               label="Portfolio"
            />
            <TextField
               fullWidth
               helperText={errors.youtube && errors.youtube}
               error={!!errors.youtube}
               onChange={onChange}
               name="youtube"
               value={values.youtube}
               label="Youtube"
            />
            <TextField
               fullWidth
               helperText={errors.facebook && errors.facebook}
               error={!!errors.facebook}
               onChange={onChange}
               name="facebook"
               value={values.facebook}
               label="Facebook"
            />
         </CardContent>
         <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
               Create User
            </Button>
         </CardActions>
      </Card>
   );
});

export default Forms;
