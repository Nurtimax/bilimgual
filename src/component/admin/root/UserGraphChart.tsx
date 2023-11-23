import React, { useEffect } from 'react';
import { Card, CardContent } from '@mui/material';
import Calendar from 'react-activity-calendar';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { DEFAULT_THEME, fillMissingDates } from '../../../utils/helpers/graph';
import { getDataThunk, selectorGithubGraph } from '../../../store/slices/github-graph';

const UserGraphChart = () => {
   const dispatch = useAppDispatch();
   const { data, year } = useAppSelector((state) => selectorGithubGraph(state));

   const arrayCalendarGrid = fillMissingDates(data, year);

   useEffect(() => {
      dispatch(getDataThunk());
   }, [dispatch]);

   return (
      <Card
         sx={{
            '& svg': {
               width: 'inherit',
               height: 'inherit'
            }
         }}
      >
         <CardContent>
            <Calendar
               data={arrayCalendarGrid}
               theme={DEFAULT_THEME}
               colorScheme="light"
               blockSize={10}
               blockMargin={1}
            />
         </CardContent>
      </Card>
   );
};

export default UserGraphChart;
