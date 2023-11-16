import { Grid } from '@mui/material';
import React from 'react';

import UploadUserImage from './UploadUserImage';
import CreateUserForms from './CreateUserForms';
import UserCardStyle from './UserCardStyle';

const MainAdminTeam = () => {
   return (
      <Grid container spacing={2}>
         <Grid item xs={3}>
            <UploadUserImage />
            <UserCardStyle />
         </Grid>
         <Grid item xs={9}>
            <CreateUserForms />
         </Grid>
      </Grid>
   );
};

export default MainAdminTeam;
