import { Box, Typography, styled } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface IExperienceCard {
   icon: ReactNode;
   title: string;
}

const StyledExperienceCard = styled(Box)`
   display: flex;
   align-items: center;
   gap: 2vw;
`;

const ExperienceCard: FC<IExperienceCard> = ({ icon, title }) => {
   return (
      <StyledExperienceCard>
         <div>{icon}</div>
         <Typography variant="body4" dangerouslySetInnerHTML={{ __html: title }} />
      </StyledExperienceCard>
   );
};

export default ExperienceCard;
