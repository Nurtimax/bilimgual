import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

type ThemeTable = {
   MuiTable?: {
      defaultProps?: ComponentsProps['MuiTable'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTable'];
      variants?: ComponentsVariants['MuiTable'];
   };
   MuiTableBody?: {
      defaultProps?: ComponentsProps['MuiTableBody'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTableBody'];
      variants?: ComponentsVariants['MuiTableBody'];
   };
   MuiTableCell?: {
      defaultProps?: ComponentsProps['MuiTableCell'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTableCell'];
      variants?: ComponentsVariants['MuiTableCell'];
   };
   MuiTableContainer?: {
      defaultProps?: ComponentsProps['MuiTableContainer'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTableContainer'];
      variants?: ComponentsVariants['MuiTableContainer'];
   };
   MuiTableFooter?: {
      defaultProps?: ComponentsProps['MuiTableFooter'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTableFooter'];
      variants?: ComponentsVariants['MuiTableFooter'];
   };
   MuiTableHead?: {
      defaultProps?: ComponentsProps['MuiTableHead'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTableHead'];
      variants?: ComponentsVariants['MuiTableHead'];
   };
   MuiTablePagination?: {
      defaultProps?: ComponentsProps['MuiTablePagination'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTablePagination'];
      variants?: ComponentsVariants['MuiTablePagination'];
   };
   MuiTableRow?: {
      defaultProps?: ComponentsProps['MuiTableRow'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTableRow'];
      variants?: ComponentsVariants['MuiTableRow'];
   };
   MuiTableSortLabel?: {
      defaultProps?: ComponentsProps['MuiTableSortLabel'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTableSortLabel'];
      variants?: ComponentsVariants['MuiTableSortLabel'];
   };
};

const themeTable: ThemeTable = {
   MuiTable: {
      styleOverrides: {
         root: {
            borderSpacing: '0 14px',
            borderCollapse: 'separate',
            border: 0
         }
      }
   },
   MuiTableBody: {
      styleOverrides: {}
   },
   MuiTableCell: {
      styleOverrides: {
         root: () => ({
            fontWeight: '900',
            fontFamily: 'Gudea',
            color: 'inherit',
            border: 0
         })
      }
   },
   MuiTableContainer: {
      styleOverrides: {
         root: {
            background: '#fff',
            padding: '50px 99px',
            borderRadius: '20px',
            minHeight: '70vh'
         }
      }
   },
   MuiTableFooter: {},
   MuiTableHead: {
      styleOverrides: {
         root: {
            background: 'white',
            color: 'black'
         }
      }
   },
   MuiTablePagination: {},
   MuiTableRow: {
      styleOverrides: {
         root: ({ theme }) => ({
            fontWeight: '900',
            fontFamily: 'Gudea',

            boxShadow:
               '0px 3px 5px -1px rgba(103, 101, 101,0.2), 0px 5px 8px 0px rgba(103, 101, 100,0.14), 0px 1px 14px 0px rgba(103, 101, 101,0.12)',
            borderRadius: theme.spacing(1)
         })
      }
   },
   MuiTableSortLabel: {}
};

export default themeTable;
