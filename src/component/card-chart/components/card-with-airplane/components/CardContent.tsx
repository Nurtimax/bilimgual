import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import CardDescription from './CardDescription';
import CardBox from './CardBox';

const StyledCardContent = styled(Grid)(() => ({
   justifyContent: 'center'
}));

const CardContent: FC = () => {
   return (
      <StyledCardContent container>
         <CardBox />
         <CardDescription />
      </StyledCardContent>
   );
};

export default CardContent;
