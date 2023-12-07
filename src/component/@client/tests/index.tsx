import { Box, Button, Card, CardActions, CardContent, Divider, LinearProgress, Typography } from '@mui/material';
import React from 'react';

import TestSelect from './test-select';

const MainClientTest = () => {
   return (
      <Box>
         <Card sx={{ borderRadius: 5 }}>
            <CardContent sx={{ p: 3 }}>
               <Typography variant="h3">0:21</Typography>
               <LinearProgress variant="determinate" value={10} sx={{ height: 10, borderRadius: 5 }} />
            </CardContent>

            <TestSelect />

            <Divider />

            <CardActions sx={{ justifyContent: 'flex-end', p: 3 }}>
               <Button variant="come">Next</Button>
            </CardActions>
         </Card>
      </Box>
   );
};

export default MainClientTest;
