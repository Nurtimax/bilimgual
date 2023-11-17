import { Typography } from '@mui/material';
import React, { useEffect } from 'react';

import { getOurTeamThunk, selectorOurTeam } from '../../store/slices/our-team';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import ImageList from './ImageList';

const MainOutTeam = () => {
   const dispatch = useAppDispatch();
   const { loading, teams } = useAppSelector(selectorOurTeam);

   useEffect(() => {
      dispatch(getOurTeamThunk());
   }, [dispatch]);

   if (!teams.length) {
      return null;
   }

   return (
      <>
         <Typography variant="h3" component="h2" textAlign="center" color="#3752B4">
            Our Team
         </Typography>
         {loading ? <h1>Loading...</h1> : <ImageList teams={teams} />}
      </>
   );
};

export default MainOutTeam;
