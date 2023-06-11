import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import { Typography } from '../../../../UI';

interface ICardDescriptionProps {
   [key: string]: unknown;
}

const StyledCardDescription = styled(Grid)(() => ({
   padding: '2rem 0',
   '& .card__description': {
      textAlign: 'center',
      display: 'block',
      width: '25vw'
   }
}));

const CardDescription: FC<ICardDescriptionProps> = () => {
   return (
      <StyledCardDescription item xs={12}>
         <Typography variant="body4" className="card__description">
            Over 10,000 fee waivers for <br /> the Bilingual English Test are offered annually.
         </Typography>
      </StyledCardDescription>
   );
};

export default CardDescription;
