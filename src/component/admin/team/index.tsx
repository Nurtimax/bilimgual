import { Grid } from '@mui/material';
import React from 'react';

import UploadUserImage from './UploadUserImage';
import CreateUserForms from './CreateUserForms';

const MainAdminTeam = () => {
   return (
      <Grid container spacing={2}>
         <Grid item xs={3.5}>
            <UploadUserImage />
         </Grid>
         <Grid item xs={8.5}>
            <CreateUserForms />
         </Grid>
      </Grid>
   );
};

export default MainAdminTeam;
