import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type TAutocompleted = {
   defaultProps?: ComponentsProps['MuiAutocomplete'];
   styleOverrides?: ComponentsOverrides<Theme>['MuiAutocomplete'];
   variants?: ComponentsVariants['MuiAutocomplete'];
};

const themeAutocompleted: TAutocompleted = {
   styleOverrides: {
      root: {
         '& .MuiInputBase-input': { fontWeight: '900', fontFamily: 'Gudea', color: '#4C4859', fontSize: '14px' },
         '& .MuiFormLabel-root': { fontWeight: '900', fontFamily: 'Gudea', color: '#4C4859', fontSize: '14px' }
      },
      listbox: {
         fontWeight: '900',
         fontFamily: 'Gudea'
      }
   }
};

export default themeAutocompleted;
