import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

import Body4Coin from '../../../../../../../assets/icons/Body4Coin';

interface ICoinBodyFourthProps {
   [key: string]: unknown;
}

const StyledCoinBodyFourth = styled(Box)(() => ({
   position: 'absolute',
   left: 180,
   top: 130,
   '& svg': {
      width: '30px',
      height: '30px'
   }
}));

const CoinBodyFourth: FC<ICoinBodyFourthProps> = () => {
   return (
      <StyledCoinBodyFourth>
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
            <Body4Coin />
         </motion.div>
      </StyledCoinBodyFourth>
   );
};

export default CoinBodyFourth;
