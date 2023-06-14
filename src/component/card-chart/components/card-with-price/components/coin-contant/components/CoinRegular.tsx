import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

import RegularCoin from '../../../../../../../assets/icons/RegularCoin';

interface ICoinRegularProps {
   [key: string]: unknown;
}

const StyledCoinRegular = styled(Box)(() => ({
   position: 'absolute',
   left: 50,
   top: 126,
   '& svg': {
      width: '25px',
      height: '25px'
   }
}));

const CoinRegular: FC<ICoinRegularProps> = () => {
   return (
      <StyledCoinRegular>
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
            <RegularCoin />
         </motion.div>
      </StyledCoinRegular>
   );
};

export default CoinRegular;
