import React, { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

interface AnnouncementHeadlineProps {
   [key: string]: unknown;
}

const StyledAnnouncementHeadline = styled(Box)(() => ({
   width: '80%',
   '& .bilingaul_announcement': {
      color: '#C93D7D'
   }
}));

const AnnouncementHeadline: FC<AnnouncementHeadlineProps> = () => {
   return (
      <StyledAnnouncementHeadline>
         <Typography variant="h1" component="h1">
            Prove your English proficiency today with
         </Typography>
         <Typography variant="h1" component="h1" className="bilingaul_announcement">
            BILINGUAL
         </Typography>
      </StyledAnnouncementHeadline>
   );
};

export default AnnouncementHeadline;
