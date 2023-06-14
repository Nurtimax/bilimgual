import React, { FC } from 'react';
import { Box, Container, styled } from '@mui/material';

import MainCardChart from '../../component/card-chart';

interface ICardChartProps {
   [key: string]: unknown;
}

const StyledCardChart = styled(Box)(() => ({}));

const CardChart: FC<ICardChartProps> = () => {
   return (
      <StyledCardChart>
         <Container>
            <MainCardChart />
         </Container>
      </StyledCardChart>
   );
};

export default CardChart;
