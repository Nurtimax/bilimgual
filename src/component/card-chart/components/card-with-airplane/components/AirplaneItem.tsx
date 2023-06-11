import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

import { IFlightVariantsArray } from '../types';
import Paper from '../../../../../assets/icons/Paper';

interface IAirplaneItemProps {
   [key: string]: unknown;
   flight: IFlightVariantsArray;
}

const StyledAirplaneItem = styled(Box)(() => ({
   position: 'absolute',
   zIndex: -10,
   bottom: '10%'
}));

const AirplaneItem: FC<IAirplaneItemProps> = ({ flight }) => {
   return (
      <StyledAirplaneItem>
         <motion.div variants={flight} initial="initial" animate="animate">
            <Paper style={flight.style} />
         </motion.div>
      </StyledAirplaneItem>
   );
};

export default AirplaneItem;
