import React, { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

import CardContent from './components/CardContent';
import EarthContent from './components/EarthContent';

interface ICardWithhEarthProps extends GridProps {
   [key: string]: unknown;
}

const StyledCardWithEarth = styled(Grid)(() => ({
   height: '100%',
   width: '100%',
   position: 'relative',
   display: 'grid',
   placeItems: 'center'
}));

const CardWithEarth: FC<ICardWithhEarthProps> = () => {
   return (
      <StyledCardWithEarth container>
         <EarthContent />
         <CardContent />
      </StyledCardWithEarth>
   );
};

export default CardWithEarth;
