import React, { FC } from 'react';
import { TextField, TextFieldProps, ThemeProvider, createTheme } from '@mui/material';

const Input: FC<TextFieldProps> = (props) => {
   const InputTheme = createTheme({
      components: {
         MuiTextField: {
            styleOverrides: {
               root: {
                  '& .MuiOutlinedInput-root': {
                     '&:hover fieldset': {
                        borderColor: '#3a10e5'
                     }
                  },
                  '& fieldset': {
                     borderColor: '#BDBDBD'
                  },
                  '& label': {
                     color: '#cacaca'
                  },
                  '& label.Mui-focused': {
                     color: '#cacaca'
                  },

                  '& .Mui-error': {
                     '&.MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                           borderColor: '#d32f2f'
                        },
                        '&.Mui-focused fieldset': {
                           borderColor: '#d32f2f !important'
                        }
                     }
                  },

                  '& .Mui-disabled': {
                     background: '#f7f7f7',
                     '&.MuiFormLabel-root': {
                        background: 'none'
                     },
                     '&.MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                           borderColor: '#BDBDBD'
                        }
                     }
                  },

                  '& .MuiOutlinedInput-root.Mui-focused': {
                     '&.Mui-focused fieldset': {
                        borderColor: '#3a10e5'
                     }
                  }
               }
            }
         }
      }
   });

   return (
      <ThemeProvider theme={InputTheme}>
         <TextField {...props} />
      </ThemeProvider>
   );
};

export default Input;
