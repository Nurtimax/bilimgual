import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

import Body3Coin from '../../../../../../../assets/icons/Body3Coin';

interface ICoinBodyThirthProps {
   [key: string]: unknown;
}

const StyledCoinBodyThirth = styled(Box)(() => ({
   position: 'absolute',
   left: 125,
   top: 130,
   '& svg': {
      width: '25px',
      height: '25px'
   }
}));

const CoinBodyThirth: FC<ICoinBodyThirthProps> = () => {
   return (
      <StyledCoinBodyThirth>
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
            <Body3Coin />
         </motion.div>
      </StyledCoinBodyThirth>
   );
};

export default CoinBodyThirth;
