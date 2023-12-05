import { Box, styled } from '@mui/material';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

import BoldCoin from '../../../../../../../../assets/icons/BoldCoin';

interface ICoinItemProps {
   [key: string]: unknown;
}

const StyledCoinItem = styled(Box)<ICoinItemProps>(() => ({
   position: 'absolute',
   left: 100,
   top: 0,
   '& svg': {
      width: '35px',
      height: '35px'
   }
}));

const CoinItem: FC<ICoinItemProps> = ({ ...rest }) => {
   return (
      <StyledCoinItem {...rest}>
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
      </StyledCoinItem>
   );
};

export default CoinItem;
