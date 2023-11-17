import React, { FormEvent } from 'react';
import {
   Box,
   Card,
   CardContent,
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   Stack,
   TextField
} from '@mui/material';
import { SketchPicker, ColorChangeHandler } from 'react-color';
import { useFormik } from 'formik';
import ColorLensIcon from '@mui/icons-material/ColorLens';

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
         telegram: '',
         radioValue: 'github'
      },
      onSubmit() {}
   });

   const handleChangeColor: ColorChangeHandler = (color) => {
      let colorStr = color.hex;
      if (color.rgb.a !== 1) {
         colorStr = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
      }
      setFieldValue(values.radioValue, colorStr);
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
            <Stack direction="row">
               <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Icon hover Color</FormLabel>
                  <RadioGroup
                     aria-labelledby="demo-radio-buttons-group-label"
                     defaultValue="female"
                     name="radioValue"
                     sx={{ display: 'grid', gap: 1, pt: 1.5 }}
                     value={values.radioValue}
                     onChange={handleChange}
                  >
                     <FormControlLabel
                        value="github"
                        control={<Radio />}
                        label={
                           <TextField
                              fullWidth
                              label="Github"
                              required
                              value={values.github}
                              onChange={handleChange}
                              error={!!errors.github}
                              helperText={errors.github && errors.github}
                              InputProps={{
                                 endAdornment: <ColorLensIcon sx={{ color: values.github }} />
                              }}
                           />
                        }
                     />

                     <FormControlLabel
                        value="facebook"
                        control={<Radio />}
                        label={
                           <TextField
                              fullWidth
                              label="Facebook"
                              value={values.facebook}
                              onChange={handleChange}
                              error={!!errors.facebook}
                              helperText={errors.facebook && errors.facebook}
                              InputProps={{
                                 endAdornment: <ColorLensIcon sx={{ color: values.facebook }} />
                              }}
                           />
                        }
                     />
                     <FormControlLabel
                        value="instagram"
                        control={<Radio />}
                        label={
                           <TextField
                              fullWidth
                              label="Instagram"
                              value={values.instagram}
                              onChange={handleChange}
                              error={!!errors.instagram}
                              helperText={errors.instagram && errors.instagram}
                              InputProps={{
                                 endAdornment: <ColorLensIcon sx={{ color: values.instagram }} />
                              }}
                           />
                        }
                     />
                     <FormControlLabel
                        value="youtube"
                        control={<Radio />}
                        label={
                           <TextField
                              fullWidth
                              label="Youtube"
                              value={values.youtube}
                              onChange={handleChange}
                              error={!!errors.youtube}
                              helperText={errors.youtube && errors.youtube}
                              InputProps={{
                                 endAdornment: <ColorLensIcon sx={{ color: values.youtube }} />
                              }}
                           />
                        }
                     />
                     <FormControlLabel
                        value="telegram"
                        control={<Radio />}
                        label={
                           <TextField
                              fullWidth
                              label="Telegram"
                              value={values.telegram}
                              onChange={handleChange}
                              error={!!errors.telegram}
                              helperText={errors.telegram && errors.telegram}
                              InputProps={{
                                 endAdornment: <ColorLensIcon sx={{ color: values.telegram }} />
                              }}
                           />
                        }
                     />
                     <FormControlLabel
                        value="portfolio"
                        control={<Radio />}
                        label={
                           <TextField
                              fullWidth
                              label="Portfolio"
                              value={values.portfolio}
                              onChange={handleChange}
                              error={!!errors.portfolio}
                              helperText={errors.portfolio && errors.portfolio}
                              InputProps={{
                                 endAdornment: <ColorLensIcon sx={{ color: values.portfolio }} />
                              }}
                           />
                        }
                     />
                     <FormControlLabel
                        value="linkedIn"
                        control={<Radio />}
                        label={
                           <TextField
                              fullWidth
                              label="LinkedIn"
                              value={values.linkedIn}
                              onChange={handleChange}
                              error={!!errors.linkedIn}
                              helperText={errors.linkedIn && errors.linkedIn}
                              InputProps={{
                                 endAdornment: <ColorLensIcon sx={{ color: values.linkedIn }} />
                              }}
                           />
                        }
                     />
                  </RadioGroup>
               </FormControl>
               <SketchPicker onChange={handleChangeColor} color={values[values.radioValue]} />
            </Stack>
         </CardContent>
      </Card>
   );
};

export default UserCardStyle;
