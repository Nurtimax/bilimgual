import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

interface ICardWithPriceProps {
   [key: string]: unknown;
}

const StyledCardWithPrice = styled(Grid)(() => ({}));

const CardWithPrice: FC<ICardWithPriceProps> = () => {
   return <StyledCardWithPrice>CardWithPrice</StyledCardWithPrice>;
};

export default CardWithPrice;
