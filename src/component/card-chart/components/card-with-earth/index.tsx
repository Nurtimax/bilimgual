import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import CardContent from './components/CardContent';
import EarthContent from './components/EarthContent';

const StyledCardWithEarth = styled(Grid)(() => ({
   height: '300px',
   width: '100%',
   position: 'relative',
   display: 'grid',
   placeItems: 'center'
}));

const CardWithEarth: FC = () => {
   return (
      <StyledCardWithEarth container>
         <EarthContent />
         <CardContent />
      </StyledCardWithEarth>
   );
};

export default CardWithEarth;
