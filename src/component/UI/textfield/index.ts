import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type MuiTextField = {
   defaultProps?: ComponentsProps['MuiTextField'];
   styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
   variants?: ComponentsVariants['MuiTextField'];
};

const TextField: MuiTextField = {
   defaultProps: {},
   styleOverrides: {},
   variants: [
      {
         props: { variant: 'outlined' },
         style: ({ theme }) => ({
            '& .MuiInputBase-input': {
               color: theme.palette.mode === 'dark' ? 'white' : 'black'
            }
         })
      }
   ]
};

export default TextField;
