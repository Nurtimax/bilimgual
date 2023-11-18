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
            background: '#575353',
            borderRadius: '5px',
            '&:hover': {
               background: '#6e6363'
            },
            '&.Mui-selected': {
               // Use this syntax for the selected state
               color: 'white',
               background: '#393838'
            }
         }
      }
   },
   MuiTabs: {
      styleOverrides: {
         flexContainer: {
            gap: 10
         }
      }
   }
};

export default themeTab;
