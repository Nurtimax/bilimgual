import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import CardDescription from './CardDescription';
import CardBox from './CardBox';

interface ICardContentProps {
   [key: string]: unknown;
}

const StyledCardContent = styled(Grid)(() => ({
   justifyContent: 'center'
}));

const CardContent: FC<ICardContentProps> = () => {
   return (
      <StyledCardContent container>
         <CardBox />
         <CardDescription />
      </StyledCardContent>
   );
};

export default CardContent;
