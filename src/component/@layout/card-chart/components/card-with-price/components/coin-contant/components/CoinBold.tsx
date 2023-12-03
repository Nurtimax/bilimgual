import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

import BoldCoin from '../../../../../../../../assets/icons/BoldCoin';

interface ICoinBoldProps {
   [key: string]: unknown;
}

const StyledCoinBold = styled(Box)(() => ({
   position: 'absolute',
   left: 155,
   top: 160,
   '& svg': {
      width: '16px',
      height: '16px'
   }
}));

const CoinBold: FC<ICoinBoldProps> = () => {
   return (
      <StyledCoinBold>
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
            <BoldCoin />
         </motion.div>
      </StyledCoinBold>
   );
};

export default CoinBold;
