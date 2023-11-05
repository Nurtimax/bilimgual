import React, { FC } from 'react';
import { Grid } from '@mui/material';

import CardWithAirplane from './components/card-with-airplane';
import CardWithEarth from './components/card-with-earth';
import CardWithPrice from './components/card-with-price';

const MainCardChart: FC = () => {
   return (
      <Grid container>
         <Grid item container xs={12} width="100%" spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
               <CardWithAirplane />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
               <CardWithEarth />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
               <CardWithPrice />
            </Grid>
         </Grid>
      </Grid>
   );
};

export default MainCardChart;
