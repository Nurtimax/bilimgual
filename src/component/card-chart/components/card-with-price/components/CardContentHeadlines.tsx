import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import { Typography } from '../../../../UI';
import { TYPOGRAPHY_CLASSNAMES } from '../../../../UI/typography';

const StyledCardContentHeadlines = styled(Box)(() => ({
   padding: '.5rem 0 0'
}));

const CardContentHeadlines: FC = () => {
   return (
      <StyledCardContentHeadlines>
         <Typography variant="body4" className={TYPOGRAPHY_CLASSNAMES.cardDescription}>
            Eligible students can take <br /> the test with absolutely zero cost to them.
         </Typography>
      </StyledCardContentHeadlines>
   );
};

export default CardContentHeadlines;
