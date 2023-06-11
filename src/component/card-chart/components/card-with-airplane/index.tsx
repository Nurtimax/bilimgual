import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import AirplaneList from './components/AirplaneList';
import CardContent from './components/CardContent';

interface ICardWithAirplaneProps {
   [key: string]: unknown;
}

const StyledCardWithAirplane = styled(Box)(() => ({
   position: 'relative'
}));

const CardWithAirplane: FC<ICardWithAirplaneProps> = () => {
   return (
      <StyledCardWithAirplane>
         <AirplaneList />
         <CardContent />
      </StyledCardWithAirplane>
   );
};

export default CardWithAirplane;
