import React, { memo, useEffect } from 'react';
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
import { actionOurTeam, selectorOurTeam } from '../../../store/slices/our-team';

const UserCardStyle = memo(() => {
   const dispatch = useAppDispatch();
   const { team } = useAppSelector(selectorOurTeam);

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
               actionOurTeam.changeSocialValueById({
                  id: key,
                  value: (values as { [key: string]: string })[key]
               })
            );
         }
      });
   }, [dispatch, values]);

   const findValue = team.socials.find((social) => social.id === values.radioValue);

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
                  {team.socials.map((el) => (
                     <FormControlLabel
                        value={el.id}
                        control={<Radio />}
                        label={
                           <TextField
                              fullWidth
                              label={String(el.id)}
                              value={el.socialColor || ''}
                              onChange={handleChangeValue}
                              error={!!(errors as { [key: string]: string })[el.id]}
                              helperText={
                                 (errors as { [key: string]: string })[el.id] &&
                                 (errors as { [key: string]: string })[el.id]
                              }
                              InputProps={{
                                 endAdornment: <ColorLensIcon sx={{ color: el.socialColor || '' }} />
                              }}
                           />
                        }
                     />
                  ))}
               </RadioGroup>
            </FormControl>
            <SketchPicker onChange={handleChangeColor} color={findValue?.socialColor || ''} />
         </CardContent>
      </Card>
   );
});

export default UserCardStyle;
