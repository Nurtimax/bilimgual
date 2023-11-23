import React, { memo } from 'react';
import { TableRow, TableHead as MuiTableHead, TableCell } from '@mui/material';

// Create an array of day names for the table header
const daysOfMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const daysOfMonths = () => {
   const currentMonth = new Date().getMonth();

   const sortedMonths = [...daysOfMonth.slice(currentMonth + 1), ...daysOfMonth.slice(0, currentMonth + 1)];

   return sortedMonths;
};

const TableHead = memo(() => {
   const arrayDaysOfMonths = daysOfMonths();

   return (
      <MuiTableHead sx={{ border: 'none' }}>
         <TableRow sx={{ p: 0, border: 'none' }}>
            <TableCell
               sx={{
                  fontSize: '10px',
                  p: 0,
                  lineHeight: 0.8,
                  letterSpacing: 0,
                  width: '20px'
               }}
               colSpan={1}
            />
            {arrayDaysOfMonths.map((day, i) => (
               <TableCell
                  align="center"
                  sx={{ fontSize: '12px', p: 0, lineHeight: 1, letterSpacing: 0 }}
                  padding="none"
                  colSpan={i === 0 ? 5 : i === arrayDaysOfMonths.length ? 5 : 4}
                  key={day}
               >
                  {day}
               </TableCell>
            ))}
         </TableRow>
      </MuiTableHead>
   );
});

export default TableHead;
