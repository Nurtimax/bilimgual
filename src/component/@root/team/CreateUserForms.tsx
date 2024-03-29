import { Grid } from '@mui/material';
import React from 'react';

import Forms from './Forms';
import UserResult from './UserResult';

const CreateUserForms = () => {
   return (
      <Grid container spacing={2}>
         <Grid item xs={7}>
            <Forms />
         </Grid>
         <Grid item xs={5} gap={1} display="grid">
            <UserResult />
         </Grid>
      </Grid>
   );
};

export default CreateUserForms;
