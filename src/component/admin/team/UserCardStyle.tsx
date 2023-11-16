import React, { FormEvent } from 'react';
import { Card, CardContent, Stack, TextField } from '@mui/material';
import { SketchPicker, ColorChangeHandler } from 'react-color';
import { useFormik } from 'formik';

const UserCardStyle = () => {
   const { values, errors, handleChange, handleSubmit, setFieldValue } = useFormik({
      initialValues: {
         color: '',
         instagram: '',
         facebook: '',
         github: '',
         portfolio: '',
         youtube: '',
         linkedIn: '',
         telegram: ''
      },
      onSubmit() {}
   });

   const handleChangeColor: ColorChangeHandler = (color) => {
      let colorStr = color.hex;
      if (color.rgb.a !== 1) {
         colorStr = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
      }
      setFieldValue('color', colorStr);
   };

   return (
      <Card
         component="form"
         onSubmit={(e) => {
            const event = e as unknown as FormEvent<HTMLFormElement>;
            handleSubmit(event);
         }}
      >
         <CardContent sx={{ display: 'grid', gap: 2 }}>
            <Stack direction="row" gap={1}>
               <Stack gap={1}>
                  <TextField
                     fullWidth
                     label="Github"
                     required
                     value={values.github}
                     onChange={handleChange}
                     error={!!errors.github}
                     helperText={errors.github && errors.github}
                  />
                  <TextField
                     fullWidth
                     label="Facebook"
                     value={values.facebook}
                     onChange={handleChange}
                     error={!!errors.facebook}
                     helperText={errors.facebook && errors.facebook}
                  />

                  <TextField
                     fullWidth
                     label="Instagram"
                     value={values.instagram}
                     onChange={handleChange}
                     error={!!errors.instagram}
                     helperText={errors.instagram && errors.instagram}
                  />
                  <TextField
                     fullWidth
                     label="LinkedIn"
                     value={values.linkedIn}
                     onChange={handleChange}
                     error={!!errors.linkedIn}
                     helperText={errors.linkedIn && errors.linkedIn}
                  />
                  <TextField
                     fullWidth
                     label="Portfolio"
                     value={values.portfolio}
                     onChange={handleChange}
                     error={!!errors.portfolio}
                     helperText={errors.portfolio && errors.portfolio}
                  />
                  <TextField
                     fullWidth
                     label="Telegram"
                     value={values.telegram}
                     onChange={handleChange}
                     error={!!errors.telegram}
                     helperText={errors.telegram && errors.telegram}
                  />
                  <TextField
                     fullWidth
                     label="Youtube"
                     value={values.youtube}
                     onChange={handleChange}
                     error={!!errors.youtube}
                     helperText={errors.youtube && errors.youtube}
                  />
               </Stack>
               <SketchPicker onChange={handleChangeColor} color={values.color} />
            </Stack>
            <TextField
               fullWidth
               value={values.color}
               onChange={handleChange}
               error={!!errors.color}
               helperText={errors.color && errors.color}
            />
            <TextField
               fullWidth
               value={values.color}
               onChange={handleChange}
               error={!!errors.color}
               helperText={errors.color && errors.color}
            />
         </CardContent>
      </Card>
   );
};

export default UserCardStyle;
