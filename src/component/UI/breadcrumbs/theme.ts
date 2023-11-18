import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type TBreadcrumbs = {
   defaultProps?: ComponentsProps['MuiBreadcrumbs'];
   styleOverrides?: ComponentsOverrides<Theme>['MuiBreadcrumbs'];
   variants?: ComponentsVariants['MuiBreadcrumbs'];
};

const themeBreadcrumbs: TBreadcrumbs = {
   styleOverrides: {
      li: {
         background: 'none',
         padding: 0,
         margin: 0
      },
      separator: {
         background: 'none',
         padding: 0,
         margin: 0,
         display: 'flex',
         alignItems: 'flex-end'
      },
      ol: {
         display: 'flex',
         alignItems: 'center',
         gap: 10,
         fontSize: 8
      }
   }
};

export default themeBreadcrumbs;
