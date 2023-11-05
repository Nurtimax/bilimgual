import React, { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

import { TYPOGRAPHY_CLASSNAMES } from '../../../../UI/typography';

interface ICardDescriptionProps {
   [key: string]: unknown;
}

const StyledCardDescription = styled(Box)(() => ({
   padding: '.5rem 0 0'
}));

const CardDescription: FC<ICardDescriptionProps> = () => {
   return (
      <StyledCardDescription>
         <Typography variant="body4" className={TYPOGRAPHY_CLASSNAMES.cardDescription}>
            Students from over 200 <br /> countries and territories have benefitted.
         </Typography>
      </StyledCardDescription>
   );
};

export default CardDescription;
