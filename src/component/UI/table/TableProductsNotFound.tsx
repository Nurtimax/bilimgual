import { TableBody, TableCell, TableRow } from '@mui/material';
import React, { FC } from 'react';

interface ITableProductsNotFound {
   colSpan: number;
   message?: string;
}

const TableProductsNotFound: FC<ITableProductsNotFound> = ({ colSpan, message }) => {
   return (
      <TableBody>
         <TableRow>
            <TableCell colSpan={colSpan} sx={{ textAlign: 'center', fontSize: '1.5rem !important' }}>
               {message || 'No Data'}
            </TableCell>
         </TableRow>
      </TableBody>
   );
};

export default TableProductsNotFound;
