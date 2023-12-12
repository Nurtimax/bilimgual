import React, { FC, ReactNode, memo } from 'react';
import {
   Table,
   TableBody,
   TableCell,
   TableCellProps,
   TableContainer,
   TableHead,
   TableRow,
   TableRowProps
} from '@mui/material';

import TableProductsNotFound from './TableProductsNotFound';

export interface ITableHeaders {
   label: string;
   icon?: ReactNode;
   tableProps?: TableCellProps;
   rowKey: string;
}

export interface ITableRow {
   [key: string]: ReactNode;
}

interface ICustomTable {
   tableHeaders: ITableHeaders[];
   tableRows: ITableRow[];
   tableRowProps?: TableRowProps;
   head?: ReactNode;
   footer?: ReactNode;
}

const CustomTable: FC<ICustomTable> = memo(({ tableHeaders, tableRows, tableRowProps, head, footer }) => {
   return (
      <TableContainer>
         {head && head}
         <Table>
            <TableHead>
               {tableHeaders.map((cell, index) => (
                  <TableCell key={index} {...cell.tableProps}>
                     {cell.label}
                  </TableCell>
               ))}
            </TableHead>
            {tableRows.length === 0 ? (
               <TableProductsNotFound colSpan={tableHeaders.length} />
            ) : (
               <TableBody>
                  {tableRows.map((row, i) => (
                     <TableRow key={i} onClick={() => {}} {...tableRowProps}>
                        {tableHeaders.map((header, index) => (
                           <TableCell
                              key={index}
                              sx={{
                                 whiteSpace: 'nowrap',
                                 overflow: 'hidden',
                                 textOverflow: 'ellipsis'
                              }}
                           >
                              {row[header.rowKey]}
                           </TableCell>
                        ))}
                     </TableRow>
                  ))}
               </TableBody>
            )}
         </Table>
         {footer}
      </TableContainer>
   );
});

export default CustomTable;
