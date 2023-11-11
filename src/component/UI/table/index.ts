import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme, tableCellClasses } from '@mui/material';

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
   MuiTable: {},
   MuiTableBody: {},
   MuiTableCell: {
      styleOverrides: {
         root: ({ theme }) => ({
            [`&.${tableCellClasses.head}`]: {
               backgroundColor: theme.palette.common.black,
               color: theme.palette.common.white
            },
            [`&.${tableCellClasses.body}`]: {
               fontSize: 14,
               color: theme.palette.common.black
            }
         })
      }
   },
   MuiTableContainer: {},
   MuiTableFooter: {},
   MuiTableHead: {},
   MuiTablePagination: {},
   MuiTableRow: {
      styleOverrides: {
         root: ({ theme }) => ({
            backgroundColor: '#FEF5E8',
            '&:nth-of-type(odd)': {
               backgroundColor: theme.palette.action.hover
            },
            // hide last border
            '&:last-child td, &:last-child th': {
               border: 0
            }
         })
      }
   },
   MuiTableSortLabel: {}
};

export default themeTable;
