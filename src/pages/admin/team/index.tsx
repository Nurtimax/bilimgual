import { Container, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';

import MainAdminTeam from '../../../component/admin/team';
import MainHeader from '../../../layout/header/MainHeader';

const AdminTeam = () => {
   return (
      <Container>
         <MainHeader sx={{ background: '#fff' }} />
         <Toolbar />
         <Toolbar />

         <Stack py={3}>
            <Typography variant="h4" component="h1">
               Create new user
            </Typography>
         </Stack>

         <MainAdminTeam />
      </Container>
   );
};

export default AdminTeam;
