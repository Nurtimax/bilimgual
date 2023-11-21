import { Box, Card, CardContent, CardHeader, CircularProgress, Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { CustomTabPanel } from '../../UI/tab-panel';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getAdminUsersChartThunk, selectorAdminUsersChart } from '../../../store/slices/admin-users-chart';

export type TUsersTimeChartTabValues = 'day' | 'week' | '2_week' | 'month' | 'last_month' | 'quarter' | 'year';

const UserChart = () => {
   const [value, setValue] = React.useState<TUsersTimeChartTabValues>('day');

   const { loading, users } = useAppSelector(selectorAdminUsersChart);

   const dispatch = useAppDispatch();

   const handleChange = (_: React.SyntheticEvent, newValue: TUsersTimeChartTabValues) => {
      setValue(newValue);
   };

   useEffect(() => {
      dispatch(getAdminUsersChartThunk({ param: value }));
   }, [dispatch, value]);

   const countUsers = users?.length || 0;

   return (
      <Card>
         <CardHeader
            title={
               <Stack direction="row" alignItems="center" gap={2}>
                  <Typography variant="h5" component="h1" pl={1}>
                     User time chart
                  </Typography>
                  <CalendarMonthIcon />
               </Stack>
            }
            sx={{ pl: 1, pb: 0, pt: 0 }}
         />
         <CardContent sx={{ p: 0 }}>
            <Tabs
               onChange={handleChange}
               value={value}
               sx={{ background: '#23212a', color: 'white', p: 0.5 }}
               variant="scrollable"
               scrollButtons={false}
               disabled={loading}
            >
               <Tab label="day" value="day" />
               <Tab label="week" value="week" />
               <Tab label="2 week" value="2_week" />
               <Tab label="month" value="month" />
               <Tab label="last month" value="last_month" />
               <Tab label="quarter" value="quarter" />
               <Tab label="year" value="year" />
            </Tabs>
            <CustomTabPanel value="day" index={value}></CustomTabPanel>
            {loading ? (
               <CircularProgress size="40" />
            ) : (
               <Box p={1}>
                  <Typography variant="body2">
                     <span style={{ color: countUsers ? 'green' : 'red' }}>
                        {countUsers ? `+${countUsers}` : countUsers}
                     </span>
                  </Typography>
               </Box>
            )}
         </CardContent>
      </Card>
   );
};

export default UserChart;
