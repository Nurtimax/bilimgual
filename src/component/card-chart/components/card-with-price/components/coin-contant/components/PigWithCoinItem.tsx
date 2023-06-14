import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

import PigWithCoin from '../../../../../../../assets/icons/PigWithCoin';

interface IPigWithCoinItemProps {
   [key: string]: unknown;
}

const StyledPigWithCoinItem = styled(Box)(() => ({
   position: 'absolute',
   top: 0,
   left: 0,
   '& svg': {
      height: '68px',
      width: '80px'
   }
}));

const PigWithCoinItem: FC<IPigWithCoinItemProps> = () => {
   return (
      <StyledPigWithCoinItem>
         <motion.div
            initial={{ y: 0 }}
            animate={{ y: 30 }}
            transition={{
               duration: 2.5,
               ease: 'easeInOut',
               repeat: Infinity,
               repeatType: 'reverse'
            }}
         >
            <PigWithCoin />
         </motion.div>
      </StyledPigWithCoinItem>
   );
};

export default PigWithCoinItem;
