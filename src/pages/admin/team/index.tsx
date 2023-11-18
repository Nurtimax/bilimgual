import { Container, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';

import MainAdminTeam from '../../../component/admin/team';
import MainHeader from '../../../layout/header/MainHeader';
import Breadcrumbs from '../../../component/UI/breadcrumbs/Breadcrumbs';

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
            <Breadcrumbs
               breadcrumbs={[
                  { id: '1', link: '/admin', title: 'Admin' },
                  { id: '2', link: '/admin/team', title: 'create team' }
               ]}
            />
         </Stack>

         <MainAdminTeam />
      </Container>
   );
};

export default AdminTeam;
