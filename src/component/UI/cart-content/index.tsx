import React, { FC, ReactNode } from 'react';
import { Box, styled } from '@mui/material';

import CardDescription from './CardDescription';
import CardBox from './CardBox';

interface ICardContent {
   cardBoxItem: ReactNode;
   description: string;
   animateBackground: ReactNode;
}

const StyledCardContent = styled(Box)(() => ({
   justifyContent: 'center',
   width: '100%',
   height: '300px',
   display: 'grid',
   gridTemplateRows: '70% 30%',
   gridTemplateColumns: '1fr'
}));

const CardContent: FC<ICardContent> = ({ cardBoxItem, description, animateBackground }) => {
   return (
      <StyledCardContent>
         <CardBox children={cardBoxItem} background={animateBackground} />
         <CardDescription html={description} />
      </StyledCardContent>
   );
};

export default CardContent;
