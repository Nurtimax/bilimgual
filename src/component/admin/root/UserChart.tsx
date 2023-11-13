import { Card, CardContent, CardHeader, Stack, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { CustomTabPanel } from '../../UI/tab-panel';

const UserChart = () => {
   const [value, setValue] = React.useState<string>('1');

   const handleChange = (_: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
   };

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
               textColor="primary"
               indicatorColor="primary"
               sx={{ background: '#23212a', color: 'white', p: 0.5 }}
               variant="scrollable"
               scrollButtons={false}
            >
               <Tab label="day" value="1" />
               <Tab label="week" value="1" />
               <Tab label="2 week" value="1" />
               <Tab label="month" value="2" />
               <Tab label="last month" value="2" />
               <Tab label="quarter" value="2" />
               <Tab label="year" value="3" />
            </Tabs>
            <CustomTabPanel value="1" index={value}>
               Item One
            </CustomTabPanel>
            <CustomTabPanel value="2" index={value}>
               Item Two
            </CustomTabPanel>
            <CustomTabPanel value="3" index={value}>
               Item Three
            </CustomTabPanel>
         </CardContent>
      </Card>
   );
};

export default UserChart;
