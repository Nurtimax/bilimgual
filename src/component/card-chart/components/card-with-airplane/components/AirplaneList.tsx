import React, { FC } from 'react';
import { Box, styled, useMediaQuery } from '@mui/material';

import { flightVariantsArray, flights } from '../utils';

import AirplaneItem from './AirplaneItem';

const StyledAirplaneList = styled(Box)(() => ({
   height: '100%',
   position: 'relative'
}));

const AirplaneList: FC = () => {
   const isMobile = useMediaQuery('(min-width:600px)');

   return (
      <StyledAirplaneList>
         {[...flights, ...(isMobile ? flightVariantsArray : [])].map((flight) => (
            <AirplaneItem key={flight.id} flight={flight} />
         ))}
      </StyledAirplaneList>
   );
};

export default AirplaneList;
