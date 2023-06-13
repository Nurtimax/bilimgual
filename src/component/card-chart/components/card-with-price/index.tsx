import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import CardContent from './components/CardContent';

interface ICardWithPriceProps {
   [key: string]: unknown;
}

const StyledCardWithPrice = styled(Grid)(() => ({}));

const CardWithPrice: FC<ICardWithPriceProps> = () => {
   return (
      <StyledCardWithPrice>
         <CardContent />
      </StyledCardWithPrice>
   );
};

export default CardWithPrice;
