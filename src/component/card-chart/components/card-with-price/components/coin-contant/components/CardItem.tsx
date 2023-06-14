import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import ZeroDollars from '../../../../../../../assets/icons/ZeroDollars';

interface ICardItemProps {
   [key: string]: unknown;
}

const StyledCardItem = styled(Box)(() => ({
   zIndex: 100,
   background: 'rgba(255, 255, 255, 0.94)',
   border: '1.5px solid #3785D7',
   borderRadius: '8px',
   padding: '1.5rem 1rem .8rem',

   '& svg': {
      width: '9rem'
   }
}));

const CardItem: FC<ICardItemProps> = () => {
   return (
      <StyledCardItem>
         <ZeroDollars />
      </StyledCardItem>
   );
};

export default CardItem;
