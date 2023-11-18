import React, { useEffect } from 'react';
import {
   Card,
   CardContent,
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   TextField
} from '@mui/material';
import { SketchPicker, ColorChangeHandler } from 'react-color';
import { useFormik } from 'formik';
import ColorLensIcon from '@mui/icons-material/ColorLens';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { actionAdminCreateTeam } from '../../../store/slices/admin-create-team';
import { adminCreateTeamSelector } from '../../../store/helpers/create-team';

const UserCardStyle = () => {
   const dispatch = useAppDispatch();
   const { forms } = useAppSelector(adminCreateTeamSelector);

   const { values, errors, handleChange, setFieldValue } = useFormik({
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

   const handleChangeValue: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      handleChange(e);
   };

   useEffect(() => {
      const initialValues = Object.keys(values);

      initialValues.forEach((key) => {
         if ((values as { [key: string]: string })[key]) {
            dispatch(
               actionAdminCreateTeam.changeSocialValueById({
                  id: key,
                  value: (values as { [key: string]: string })[key]
               })
            );
         }
      });
   }, [dispatch, values]);

   return (
      <Card>
         <CardContent sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr 1fr' }}>
            <FormControl>
               <FormLabel id="demo-radio-buttons-group-label">Icon hover Color</FormLabel>
               <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radioValue"
                  sx={{ display: 'grid', gap: 1, pt: 1.5 }}
                  value={values.radioValue}
                  onChange={handleChangeValue}
               >
                  {forms.socials.map((el) => (
                     <FormControlLabel
                        value={el.id}
                        control={<Radio />}
                        label={
                           <TextField
                              fullWidth
                              label={String(el.id)}
                              value={(values as { [key: string]: string })[el.id]}
                              onChange={handleChangeValue}
                              error={!!(errors as { [key: string]: string })[el.id]}
                              helperText={
                                 (errors as { [key: string]: string })[el.id] &&
                                 (errors as { [key: string]: string })[el.id]
                              }
                              InputProps={{
                                 endAdornment: (
                                    <ColorLensIcon sx={{ color: (values as { [key: string]: string })[el.id] }} />
                                 )
                              }}
                           />
                        }
                     />
                  ))}
               </RadioGroup>
            </FormControl>
            <SketchPicker
               onChange={handleChangeColor}
               color={(values as { [key: string]: string })[values.radioValue]}
            />
         </CardContent>
      </Card>
   );
};

export default UserCardStyle;
