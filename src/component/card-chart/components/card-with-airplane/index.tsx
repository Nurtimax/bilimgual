import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import AirplaneList from './components/AirplaneList';
import CardContent from './components/CardContent';

const StyledCardWithAirplane = styled(Box)(() => ({
   position: 'relative'
}));

const CardWithAirplane: FC = () => {
   return (
      <StyledCardWithAirplane>
         <AirplaneList />
         <CardContent />
      </StyledCardWithAirplane>
   );
};

export default CardWithAirplane;
