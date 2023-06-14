import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import { Typography } from '../../../../UI';

interface ICardContentHeadlinesProps {
   [key: string]: unknown;
}

const StyledCardContentHeadlines = styled(Box)(() => ({
   padding: '.5rem 0 0',
   '& .card__description': {
      textAlign: 'center',
      display: 'block',
      width: '25vw'
   }
}));

const CardContentHeadlines: FC<ICardContentHeadlinesProps> = () => {
   return (
      <StyledCardContentHeadlines>
         <Typography variant="body4" className="card__description">
            Eligible students can take <br /> the test with absolutely zero cost to them.
         </Typography>
      </StyledCardContentHeadlines>
   );
};

export default CardContentHeadlines;
