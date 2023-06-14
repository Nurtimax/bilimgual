import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import CardContent from './components/CardContent';
import CoinContent from './components/coin-contant/CoinContent';

interface ICardWithPriceProps {
   [key: string]: unknown;
}

const StyledCardWithPrice = styled(Grid)(() => ({
   padding: '2rem 0',
   display: 'grid',
   placeItems: 'center'
}));

const CardWithPrice: FC<ICardWithPriceProps> = () => {
   return (
      <StyledCardWithPrice>
         <CoinContent />
         <CardContent />
      </StyledCardWithPrice>
   );
};

export default CardWithPrice;
