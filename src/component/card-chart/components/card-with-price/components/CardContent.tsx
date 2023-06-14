import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import CardContentHeadlines from './CardContentHeadlines';

interface ICardContentProps {
   [key: string]: unknown;
}

const StyledCardContent = styled(Box)(() => ({}));

const CardContent: FC<ICardContentProps> = () => {
   return (
      <StyledCardContent>
         <CardContentHeadlines />
      </StyledCardContent>
   );
};

export default CardContent;
