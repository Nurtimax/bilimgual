import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

import PigCoin from '../../../../../../../assets/icons/PigCoin';

interface IPigCoinItemProps {
   [key: string]: unknown;
}

const StyledPigCoinItem = styled(Box)(() => ({
   position: 'absolute',
   right: 0,
   bottom: 0,
   '& svg': {
      height: '68px',
      width: '80px'
   }
}));

const PigCoinItem: FC<IPigCoinItemProps> = () => {
   return (
      <StyledPigCoinItem>
         <motion.div
            initial={{ y: -10 }}
            animate={{ y: 20 }}
            transition={{
               duration: 2.5,
               ease: 'easeInOut',
               repeat: Infinity,
               repeatType: 'reverse'
            }}
         >
            <PigCoin />
         </motion.div>
      </StyledPigCoinItem>
   );
};

export default PigCoinItem;
