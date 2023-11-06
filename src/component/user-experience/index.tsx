import React from 'react';
import { Grid, Typography } from '@mui/material';

import EnglishBook from '../../assets/icons/EnglishBook';

import ExperienceCardList from './ExperienceCardList';

const MainUserExperience = () => {
   return (
      <Grid container py={10}>
         <Grid item xs={6} md={6} sm={12} lgMobile={12} mdMobile={12} smMobile={12}>
            <Typography variant="h2" color="#3752B4" pt={1}>
               Unparalleled user <br /> experience
            </Typography>

            <Typography variant="body2" pt={1}>
               The most effective way to perfect a language is by immersing yourself in it. Rosetta Stone for Enterprise
               delivers an effective end-to-end experience, founded on a wealth of carefully structured content. Each
               learner has the opportunity to balance independent study with optional online tutoring in a way that fits
               their schedule and language learning goals.
            </Typography>

            <ExperienceCardList />
         </Grid>
         <Grid
            item
            xs={6}
            md={6}
            sm={12}
            lgMobile={12}
            mdMobile={12}
            smMobile={12}
            sx={{ placeItems: 'center', display: 'grid', pt: 2 }}
         >
            <EnglishBook style={{ width: '90%', height: '90%' }} />
         </Grid>
      </Grid>
   );
};

export default MainUserExperience;
