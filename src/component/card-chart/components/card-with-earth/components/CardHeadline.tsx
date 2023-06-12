import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import TwoHundred from '../../../../../assets/icons/TwoHundred';

interface ICardHeadlineProps {
   [key: string]: unknown;
}

const StyledCardHeadline = styled(Box)(() => ({
   background: 'rgba(255, 255, 255, 0.94)',
   border: '1.5px solid #3785D7',
   borderRadius: '8px',
   padding: '1.5rem 1rem .8rem',
   alignSelf: 'flex-end',

   '& svg': {
      width: '9rem'
   }
}));

const CardHeadline: FC<ICardHeadlineProps> = () => {
   return (
      <StyledCardHeadline>
         <TwoHundred />
      </StyledCardHeadline>
   );
};

export default CardHeadline;
