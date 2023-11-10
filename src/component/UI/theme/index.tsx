import { createTheme, PaletteOptions, ThemeProvider } from '@mui/material';
import React, { FC, ReactNode } from 'react';

import themeTypography from '../typography';
import Button from '../button';
import TextField from '../textfield';
import ThemeAccordion from '../accordion';

interface ThemeProps {
   children: ReactNode;
}

export const palette: PaletteOptions = {
   primary: {
      main: '#3A10E5',
      light: '#ffffff',
      dark: '#D7E1F8',
      contrastText: '#4E28E8'
   },
   secondary: {
      main: '#0F85F1',
      light: '#3752B4',
      A100: '#D4D0D0',
      A200: '#D8D9DB',
      A400: '#F7F7F7',
      dark: '#757575'
   },
   error: {
      main: '#F61414',
      contrastText: '#4C4859',
      dark: '#4C4C4C'
   },
   common: {
      white: '#ffffff',
      black: '#23212A'
   },
   background: {
      default: '#C4C4C4', //
      paper: 'linear-gradient(270deg, #3A10E5 0%, #6746EF 75.83%)'
   },
   action: {
      disabled: '#C4C4C4',
      active: '#3A10E5'
   },
   text: {
      primary: '#ffffff',
      secondary: '#3A10E5',
      disabled: '#9A9A9A'
   },
   success: {
      main: '#2AB930',
      dark: '#666CA7',
      light: '#08AF10',
      contrastText: '#31CF38',
      A700: 'linear-gradient(270deg, #C23677 0%, #C5397A 27.92%, #C43879 64.37%, #BB2E6F 100%)'
   },
   warning: {
      main: '#FCD200',
      light: '#FE9102',
      contrastText: '#FEF5E8'
   }
};

const Theme: FC<ThemeProps> = ({ children }) => {
   /* 
   * Default breakpoints
   Each breakpoint (a key) matches with a fixed screen width (a value):

   * xs, extra-small: 0px
   * sm, small: 600px
   * md, medium: 900px
   * lg, large: 1200px
   * xl, extra-lerge: 1536px 
    
    */

   const theme = createTheme({
      breakpoints: {
         values: {
            xs: 0,
            lg: 1200,
            md: 900,
            sm: 600,
            xl: 1536,
            lgMobile: 500,
            mdMobile: 400,
            smMobile: 350
         }
      },
      components: {
         MuiContainer: {
            styleOverrides: {
               maxWidthLg: {
                  '&.MuiContainer-maxWidthLg': {
                     maxWidth: '95%'
                  }
               },
               maxWidthMd: {
                  '&.MuiContainer-maxWidthMd': {
                     maxWidth: '90%'
                  }
               }
            }
         },
         MuiTypography: themeTypography,
         MuiButton: Button,
         MuiTextField: TextField,
         ...ThemeAccordion
      },
      palette
   });
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
