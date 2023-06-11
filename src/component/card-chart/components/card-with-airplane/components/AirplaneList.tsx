import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import { flightVariantsArray } from '../utils';

import AirplaneItem from './AirplaneItem';

interface IAirplaneListProps {
   [key: string]: unknown;
}

const StyledAirplaneList = styled(Box)(() => ({
   height: '179px',
   position: 'relative'
}));

const AirplaneList: FC<IAirplaneListProps> = () => {
   return (
      <StyledAirplaneList>
         {flightVariantsArray.map((flight) => (
            <AirplaneItem flight={flight} />
         ))}
      </StyledAirplaneList>
   );
};

export default AirplaneList;
