import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

import Body2Coin from '../../../../../../../../assets/icons/Body2Coin';

interface ICoinBodySecondProps {
   [key: string]: unknown;
}

const StyledCoinBodySecond = styled(Box)(() => ({
   position: 'absolute',
   left: 200,
   top: 10,
   '& svg': {
      width: '25px',
      height: '25px'
   }
}));

const CoinBodySecond: FC<ICoinBodySecondProps> = () => {
   return (
      <StyledCoinBodySecond>
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
            <Body2Coin />
         </motion.div>
      </StyledCoinBodySecond>
   );
};

export default CoinBodySecond;
