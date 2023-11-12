import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme, outlinedInputClasses } from '@mui/material';

type MuiTextField = {
   MuiTextField: {
      defaultProps?: ComponentsProps['MuiTextField'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
      variants?: ComponentsVariants['MuiTextField'];
   };
   MuiOutlinedInput?: {
      defaultProps?: ComponentsProps['MuiOutlinedInput'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiOutlinedInput'];
      variants?: ComponentsVariants['MuiOutlinedInput'];
   };
   MuiFilledInput?: {
      defaultProps?: ComponentsProps['MuiFilledInput'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiFilledInput'];
      variants?: ComponentsVariants['MuiFilledInput'];
   };
   MuiInput?: {
      defaultProps?: ComponentsProps['MuiInput'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiInput'];
      variants?: ComponentsVariants['MuiInput'];
   };
};

const TextField: MuiTextField = {
   MuiTextField: {
      styleOverrides: {
         root: {
            '--TextField-brandBorderColor': '#4C4859',
            '--TextField-brandBorderColor2': '#4C4859',
            '--TextField-brandBorderHoverColor': '#3A10E5',
            '--TextField-brandBorderFocusedColor': '#4C4859',
            '--TextField-brandBorderFocusedColor2': '#4C4859',
            '--TextField-brandBorderFocusedColor3': '#4C4859',
            '--TextField-brandBorderFocusedColor4': '#4C4859',
            '& label.Mui-focused': {
               color: 'var(--TextField-brandBorderFocusedColor)'
            }
         }
      }
   },

   MuiOutlinedInput: {
      styleOverrides: {
         notchedOutline: {
            border: '2px solid var(--TextField-brandBorderColor)'
         },
         root: {
            borderRadius: '8px',

            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
               borderColor: 'var(--TextField-brandBorderHoverColor)'
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
               borderColor: 'var(--TextField-brandBorderFocusedColor2)'
            }
         },
         input: {
            color: 'black'
         }
      }
   },
   MuiFilledInput: {
      styleOverrides: {
         root: {
            '&:before, &:after': {
               borderBottom: '2px solid var(--TextField-brandBorderColor)'
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
               borderBottom: '2px solid var(--TextField-brandBorderHoverColor)'
            },
            '&.Mui-focused:after': {
               borderBottom: '2px solid var(--TextField-brandBorderFocusedColor3)'
            }
         }
      }
   },
   MuiInput: {
      styleOverrides: {
         root: {
            '&:before': {
               borderBottom: '2px solid var(--TextField-brandBorderColor)'
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
               borderBottom: '2px solid var(--TextField-brandBorderHoverColor)'
            },
            '&.Mui-focused:after': {
               borderBottom: '2px solid var(--TextField-brandBorderFocusedColor4)'
            }
         }
      }
   }
};

export default TextField;
