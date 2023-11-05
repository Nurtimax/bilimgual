import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import { Typography } from '../../../../UI';
import { TYPOGRAPHY_CLASSNAMES } from '../../../../UI/typography';

const StyledCardDescription = styled(Grid)(() => ({
   padding: '2rem 0',
   justifyContent: 'center',
   display: 'grid'
}));

const CardDescription: FC = () => {
   return (
      <StyledCardDescription item xs={12}>
         <Typography variant="body4" className={TYPOGRAPHY_CLASSNAMES.cardDescription}>
            Over 10,000 fee waivers for <br /> the Bilingual English Test are offered annually.
         </Typography>
      </StyledCardDescription>
   );
};

export default CardDescription;
