import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

import MediumCoin from '../../../../../../../assets/icons/MediumCoin';

interface ICoinMediumProps {
   [key: string]: unknown;
}

const StyledCoinMedium = styled(Box)(() => ({
   position: 'absolute',
   left: 85,
   top: 150,
   '& svg': {
      width: '16px',
      height: '16px'
   }
}));

const CoinMedium: FC<ICoinMediumProps> = () => {
   return (
      <StyledCoinMedium>
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
            <MediumCoin />
         </motion.div>
      </StyledCoinMedium>
   );
};

export default CoinMedium;
