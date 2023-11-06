import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import { flightVariantsArray } from '../utils';

import AirplaneItem from './AirplaneItem';

const StyledAirplaneList = styled(Box)(() => ({
   height: '100%',
   position: 'relative'
}));

const AirplaneList: FC = () => {
   return (
      <StyledAirplaneList>
         {flightVariantsArray.map((flight) => (
            <AirplaneItem flight={flight} />
         ))}
      </StyledAirplaneList>
   );
};

export default AirplaneList;
