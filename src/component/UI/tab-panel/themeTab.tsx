import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type Tab = {
   MuiTab?: {
      defaultProps?: ComponentsProps['MuiTab'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTab'];
      variants?: ComponentsVariants['MuiTab'];
   };
   MuiTabs?: {
      defaultProps?: ComponentsProps['MuiTabs'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTabs'];
      variants?: ComponentsVariants['MuiTabs'];
   };
};

const themeTab: Tab = {
   MuiTab: {
      styleOverrides: {
         root: {
            padding: 1,
            color: 'white',
            background: 'black',
            borderRadius: '5px'
         }
      }
   }
};

export default themeTab;
