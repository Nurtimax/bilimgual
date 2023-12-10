import React, { FC, ReactNode, memo } from 'react';
import { Table, TableBody, TableCell, TableCellProps, TableContainer, TableHead, TableRow } from '@mui/material';

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
   tableRowProps?: TableCellProps;
}

const CustomTable: FC<ICustomTable> = memo(({ tableHeaders, tableRows, tableRowProps }) => {
   return (
      <TableContainer>
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
                     <TableRow key={i} onClick={() => {}}>
                        {tableHeaders.map((header, index) => (
                           <TableCell
                              key={index}
                              {...tableRowProps}
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
      </TableContainer>
   );
});

export default CustomTable;
