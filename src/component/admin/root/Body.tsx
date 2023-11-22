import React, { memo } from 'react';
import { TableBody, TableCell, TableRow, Tooltip, styled } from '@mui/material';

import { useAppSelector } from '../../../store/hooks';
import { chartBackground, createCalendarGrid } from '../../../utils/helpers/graph';
import { selectorGithubGraph } from '../../../store/slices/github-graph';

const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const StyledTableCell = styled(TableCell)`
   padding: 0;
   border-radius: 2px;
   height: 10px;
   width: 15px;
   min-height: 15px;
   min-width: 10px;
   line-height: 0.8;
   border: 0;
   font-size: 10px;
   font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
   font-weight: 400;
`;

const Body = memo(() => {
   const { data, year } = useAppSelector((state) => selectorGithubGraph(state));

   const arrayCalendarGrid = createCalendarGrid(data, year);

   return (
      <TableBody>
         {arrayCalendarGrid.map((el, i) => (
            <TableRow>
               <StyledTableCell align="center">{daysOfWeek[i % 2 === 1 ? i : -1]}</StyledTableCell>
               {el.map((sub) => (
                  <Tooltip
                     title={
                        <>
                           {sub.date} <br />
                           count users {sub.value.length}
                        </>
                     }
                     placement="top"
                     arrow
                     disableInteractive
                     describeChild={false}
                  >
                     <StyledTableCell
                        align="center"
                        padding="none"
                        sx={{
                           width: '10px',
                           ...chartBackground(sub.value.length, sub.alpha)
                        }}
                     />
                  </Tooltip>
               ))}
            </TableRow>
         ))}
      </TableBody>
   );
});

export default Body;
