import React, { useEffect } from 'react';
import Calendar from 'react-activity-calendar';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { DEFAULT_THEME, fillMissingDates } from '../../../utils/helpers/graph';
import { getDataThunk, selectorGithubGraph } from '../../../store/slices/github-graph';
import Card from '../../UI/card';

const UserGraphChart = () => {
   const dispatch = useAppDispatch();
   const { data, year } = useAppSelector((state) => selectorGithubGraph(state));

   const arrayCalendarGrid = fillMissingDates(data, year);

   useEffect(() => {
      dispatch(getDataThunk());
   }, [dispatch]);

   if (!arrayCalendarGrid.length) {
      return null;
   }

   return (
      <Card
         cardProps={{
            sx: {
               '& svg': {
                  width: 'inherit',
                  height: 'inherit'
               }
            }
         }}
         contentProps={{
            children: (
               <Calendar
                  data={arrayCalendarGrid}
                  theme={DEFAULT_THEME}
                  colorScheme="light"
                  blockSize={10}
                  blockMargin={1}
               />
            )
         }}
      />
   );
};

export default UserGraphChart;
