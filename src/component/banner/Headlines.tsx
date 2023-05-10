import { FC } from 'react';
import { Box, styled } from '@mui/material';

import AnnouncementHeadline from './AnnouncementHeadline';
import DescriptionHeadline from './DescriptionHeadline';

interface HeadlinesProps {
   [key: string]: unknown;
}

const StyledHeadlines = styled(Box)(() => ({
   height: '778px',
   width: '65%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'center',
   gap: '26px'
}));

const Headlines: FC<HeadlinesProps> = () => {
   return (
      <StyledHeadlines>
         <AnnouncementHeadline />
         <DescriptionHeadline />
      </StyledHeadlines>
   );
};

export default Headlines;
