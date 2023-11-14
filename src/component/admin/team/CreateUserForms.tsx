import { Grid } from '@mui/material';
import React from 'react';

import Forms from './Forms';
import UserResult from './UserResult';

const CreateUserForms = () => {
   return (
      <Grid container spacing={2}>
         <Grid item xs={8}>
            <Forms />
         </Grid>
         <Grid item xs={4}>
            <UserResult />
         </Grid>
      </Grid>
   );
};

export default CreateUserForms;
