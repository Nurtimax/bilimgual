import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type TAccordion = {
   MuiAccordion?: {
      defaultProps?: ComponentsProps['MuiAccordion'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiAccordion'];
      variants?: ComponentsVariants['MuiAccordion'];
   };
   MuiAccordionActions?: {
      defaultProps?: ComponentsProps['MuiAccordionActions'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiAccordionActions'];
      variants?: ComponentsVariants['MuiAccordionActions'];
   };
   MuiAccordionDetails?: {
      defaultProps?: ComponentsProps['MuiAccordionDetails'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiAccordionDetails'];
      variants?: ComponentsVariants['MuiAccordionDetails'];
   };
   MuiAccordionSummary?: {
      defaultProps?: ComponentsProps['MuiAccordionSummary'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiAccordionSummary'];
      variants?: ComponentsVariants['MuiAccordionSummary'];
   };
};

const ThemeAccordion: TAccordion = {
   MuiAccordionSummary: {
      styleOverrides: {
         root: ({ theme }) => ({
            backgroundColor: 'rgba(0, 0, 0, .03)',
            padding: 0,
            color: 'white',
            fontSize: '20px',
            fontWeight: '600',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
               transform: 'rotate(90deg)'
            },
            '& .MuiAccordionSummary-content': {
               marginLeft: theme.spacing(1)
            }
         })
      }
   },
   MuiAccordion: {
      defaultProps: {
         disableGutters: true,
         elevation: 0,
         square: true
      },
      styleOverrides: {
         root: {
            border: `1px solid #4A4A4A`,
            borderRight: 'none',
            borderLeft: 'none',
            padding: '1rem 0',
            '&:not(:last-child)': {
               borderBottom: 0
            },
            '&:before': {
               display: 'none'
            }
         }
      }
   }
};

export default ThemeAccordion;
