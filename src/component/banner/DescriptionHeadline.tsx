import React, { FC } from 'react';
import { Typography, styled } from '@mui/material';

interface DescriptionHeadlineProps {
   [key: string]: unknown;
}

const StyledDescriptionHeadline = styled(Typography)(() => ({
   color: '#23212A'
}));

const DescriptionHeadline: FC<DescriptionHeadlineProps> = () => {
   return (
      <StyledDescriptionHeadline variant="body2">
         For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and confidence they need to
         speak new languages.
      </StyledDescriptionHeadline>
   );
};

export default DescriptionHeadline;
