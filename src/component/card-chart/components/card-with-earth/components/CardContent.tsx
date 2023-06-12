import React, { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

import CardHeadline from './CardHeadline';
import CardDescription from './CardDescription';

interface ICardContentProps extends GridProps {
   [key: string]: unknown;
}

const StyledCardContent = styled(Grid)(() => ({
   display: 'grid',
   placeItems: 'center',
   width: '100%',
   position: 'relative',
   height: '100%',
   padding: 0
}));

const CardContent: FC<ICardContentProps> = () => {
   return (
      <StyledCardContent item>
         <CardHeadline />
         <CardDescription />
      </StyledCardContent>
   );
};

export default CardContent;
