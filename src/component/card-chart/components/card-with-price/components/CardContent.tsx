import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

interface ICardContentProps {
   [key: string]: unknown;
}

const StyledCardContent = styled(Box)(() => ({}));

const CardContent: FC<ICardContentProps> = () => {
   return <StyledCardContent>CardContent</StyledCardContent>;
};

export default CardContent;
