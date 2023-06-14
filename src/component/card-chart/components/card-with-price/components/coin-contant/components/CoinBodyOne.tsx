import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

import Body1Coin from '../../../../../../../assets/icons/Body1Coin';

interface ICoinBodyOneProps {
   [key: string]: unknown;
}

const StyledCoinBodyOne = styled(Box)(() => ({
   position: 'absolute',
   left: 155,
   top: 20,
   '& svg': {
      height: '25px',
      width: '25px'
   }
}));

const CoinBodyOne: FC<ICoinBodyOneProps> = () => {
   return (
      <StyledCoinBodyOne>
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
            <Body1Coin />
         </motion.div>
      </StyledCoinBodyOne>
   );
};

export default CoinBodyOne;
