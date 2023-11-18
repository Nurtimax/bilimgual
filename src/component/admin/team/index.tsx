import { Card, Grid } from '@mui/material';
import React from 'react';

import UploadUserImage from './UploadUserImage';
import CreateUserForms from './CreateUserForms';
import UploadUserBackground from './UploadUserBackground';

const MainAdminTeam = () => {
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
