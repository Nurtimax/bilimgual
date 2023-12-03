import { Card, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import CircularLoading from '../../loading';
import { getOurTeamByIdThunk, selectorOurTeam } from '../../../store/slices/our-team';

import UploadUserImage from './UploadUserImage';
import CreateUserForms from './CreateUserForms';
import UploadUserBackground from './UploadUserBackground';

const MainAdminTeam = () => {
   const dispatch = useAppDispatch();
   const { loading } = useAppSelector(selectorOurTeam);

   const { query } = useRouter();

   useEffect(() => {
      const id = query.action as string;
      if (id !== 'create') {
         dispatch(getOurTeamByIdThunk({ id }));
      }
   }, [dispatch, query.action]);

   if (loading) {
      return <CircularLoading open />;
   }

   return (
      <Grid container spacing={2} pb={5}>
         <Grid item xs={3}>
            <Card>
               <UploadUserImage />
               <UploadUserBackground />
            </Card>
         </Grid>
         <Grid item xs={9}>
            <CreateUserForms />
         </Grid>
      </Grid>
   );
};

export default MainAdminTeam;
