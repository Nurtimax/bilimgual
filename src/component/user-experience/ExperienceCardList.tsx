import React, { ReactNode, memo } from 'react';
import { Grid } from '@mui/material';

import AccessibleWithPhone from '../../assets/icons/AccessibleWithPhone';
import Extensive from '../../assets/icons/Extensive';
import Speech from '../../assets/icons/Speech';
import Tutoring from '../../assets/icons/Tutoring';
import ExperienceCard from '../UI/experience-card';

interface IExperienceCards {
   id: number;
   icon: ReactNode;
   title: string;
}

const experienceCards: IExperienceCards[] = [
   { id: 1, icon: <AccessibleWithPhone />, title: 'Accessible anytime, <br/> anywhere' },
   { id: 2, icon: <Extensive />, title: 'Extensive business <br/> content' },
   { id: 3, icon: <Speech />, title: 'Leading speech <br/> recognition' },
   { id: 4, icon: <Tutoring />, title: 'Unlimited live <br/> tutoring' }
];

const ExperienceCardList = memo(() => {
   return (
      <Grid container py={4} rowSpacing={5}>
         {experienceCards.map(({ id, ...card }) => (
            <Grid key={id} item xs={6}>
               <ExperienceCard {...card} />
            </Grid>
         ))}
      </Grid>
   );
});

export default ExperienceCardList;
