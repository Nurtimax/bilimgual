import React, { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

interface ICardWithhEarthProps extends GridProps {
   [key: string]: unknown;
}

const StyledCardWithEarth = styled(Grid)(() => ({}));

const CardWithEarth: FC<ICardWithhEarthProps> = () => {
   return <StyledCardWithEarth container>CardWithEarth</StyledCardWithEarth>;
};

export default CardWithEarth;
