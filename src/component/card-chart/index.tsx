import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import CardWithAirplane from './components/card-with-airplane';
import CardWithEarth from './components/card-with-earth';
import CardWithPrice from './components/card-with-price';

interface ICardChartProps {
   [key: string]: unknown;
}

const StyledCardChart = styled(Grid)(() => ({}));

const CardChart: FC<ICardChartProps> = () => {
   return (
      <StyledCardChart container gap={4.8}>
         <Grid item xs={3.4}>
            <CardWithAirplane />
         </Grid>
         <Grid item xs={4}>
            <CardWithEarth />
         </Grid>
         <Grid item xs={4}>
            <CardWithPrice />
         </Grid>
      </StyledCardChart>
   );
};

export default CardChart;
