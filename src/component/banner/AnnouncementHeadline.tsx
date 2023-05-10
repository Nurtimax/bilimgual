import { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';

interface AnnouncementHeadlineProps {
   [key: string]: unknown;
}

const StyledAnnouncementHeadline = styled(Box)(() => ({
   '& .MuiTypography-root': {
      fontFamily: 'Gilroy',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '60px',
      lineHeight: '73px',

      color: '#43404E',
      width: '60%'
   },

   '& .bilingaul_announcement': {
      fontSize: '75px',
      color: '#C93D7D'
   }
}));

const AnnouncementHeadline: FC<AnnouncementHeadlineProps> = () => {
   return (
      <StyledAnnouncementHeadline>
         <Typography variant="h5" component="h1">
            Prove your English proficiency today with
         </Typography>
         <Typography variant="h5" component="h1" className="bilingaul_announcement">
            BILINGUAL
         </Typography>
      </StyledAnnouncementHeadline>
   );
};

export default AnnouncementHeadline;
