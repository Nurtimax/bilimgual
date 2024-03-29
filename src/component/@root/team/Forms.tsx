import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC, FormEvent, memo } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import LoginAlert from '../../UI/login/Alert';
import { actionOurTeam, createNewTeam, putOurTeamByIdThunk, selectorOurTeam } from '../../../store/slices/our-team';
import Card from '../../UI/card';

import validationSchema from './validate';

const Forms: FC = memo(() => {
   const { team } = useAppSelector(selectorOurTeam);
   const { query, push } = useRouter();

   const dispatch = useAppDispatch();

   const isCreate = query?.action !== 'create';

   const initialValues = isCreate
      ? {
           ...team,
           ...team.socials.reduce((curr, soc) => {
              return { ...curr, [soc.id]: soc.link };
           }, {}),
           afterSubmit: {
              name: '',
              message: ''
           }
        }
      : {
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
           facebook: '',
           borderRadius: '',
           staticImage: '',
           socials: [],
           position: '',
           profileBackground: '',
           afterSubmit: {
              name: '',
              message: ''
           }
        };

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues,
      onSubmit: async (_, { resetForm, setErrors }) => {
         try {
            if (!isCreate) {
               await dispatch(createNewTeam()).unwrap();
            } else {
               if (query.action) {
                  await dispatch(putOurTeamByIdThunk({ id: query?.action as string })).unwrap();
               }
            }

            resetForm();
            dispatch(actionOurTeam.resetForms());
            push('/admin/team');
         } catch (error) {
            if (error instanceof Error) {
               setErrors({ afterSubmit: { message: error.message, name: error.name } });
            }
         }
      },
      validationSchema,
      validateOnChange: false
   });

   const onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
      const key = e.target.name;
      const value = e.target.value;

      dispatch(actionOurTeam.changeValueWithKey({ key, value }));

      handleChange(e);
   };

   return (
      <Card
         cardProps={{
            component: 'form',
            onSubmit: (e) => {
               const event = e as unknown as FormEvent<HTMLFormElement>;
               handleSubmit(event);
            }
         }}
         contentProps={{
            children: (
               <>
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
                     helperText={errors.position && errors.position}
                     error={!!errors.position}
                     onChange={onChange}
                     name="position"
                     value={values.position}
                     label="Position"
                     placeholder="Frontend Developer"
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
               </>
            )
         }}
         headerProps={{
            children: errors.afterSubmit && (
               <LoginAlert
                  errorName={typeof errors.afterSubmit === 'object' ? errors.afterSubmit.name : ''}
                  message={typeof errors.afterSubmit === 'object' ? errors.afterSubmit.message : ''}
               />
            )
         }}
         actionProps={{
            children: (
               <Button variant="contained" type="submit">
                  {team ? 'Edit user' : 'Create user'}
               </Button>
            )
         }}
      />
   );
});

export default Forms;
