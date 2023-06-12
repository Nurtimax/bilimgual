import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import { Typography } from '../../../../UI';

interface ICardDescriptionProps {
   [key: string]: unknown;
}

const StyledCardDescription = styled(Box)(() => ({
   padding: '.5rem 0 0',
   '& .card__description': {
      textAlign: 'center',
      display: 'block',
      width: '25vw'
   }
}));

const CardDescription: FC<ICardDescriptionProps> = () => {
   return (
      <StyledCardDescription>
         <Typography variant="body4" className="card__description">
            Students from over 200 <br /> countries and territories have benefitted.
         </Typography>
      </StyledCardDescription>
   );
};

export default CardDescription;
