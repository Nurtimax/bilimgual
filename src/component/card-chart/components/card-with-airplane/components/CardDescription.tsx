import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import { Typography } from '../../../../UI';

const StyledCardDescription = styled(Grid)(() => ({
   padding: '2rem 0',
   justifyContent: 'center',
   display: 'grid',
   '& .card__description': {
      textAlign: 'center',
      display: 'block'
   }
}));

const CardDescription: FC = () => {
   return (
      <StyledCardDescription item xs={12}>
         <Typography variant="body4" className="card__description">
            Over 10,000 fee waivers for <br /> the Bilingual English Test are offered annually.
         </Typography>
      </StyledCardDescription>
   );
};

export default CardDescription;
