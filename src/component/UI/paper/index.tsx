import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type TPaper = {
   defaultProps?: ComponentsProps['MuiPaper'];
   styleOverrides?: ComponentsOverrides<Theme>['MuiPaper'];
   variants?: ComponentsVariants['MuiPaper'];
};

const paper: TPaper = {
   styleOverrides: {
      root: {
         background: 'white',
         color: 'black'
      }
   }
};

export default paper;
