import { Container, Stack, Typography } from '@mui/material';
import React from 'react';

import Breadcrumbs from '../../../component/UI/breadcrumbs/Breadcrumbs';
import MainTeamList from '../../../component/@admin/team-list';
import ToolbarComponent from '../../../component/page/ToolbarComponent';

const AdminTeam = () => {
   return (
      <ToolbarComponent>
         <Container>
            <Stack py={3}>
               <Typography variant="h4" component="h1">
                  Create new user
               </Typography>
               <Breadcrumbs
                  color="black"
                  breadcrumbs={[
                     { id: '1', link: '/admin', title: 'Admin' },
                     { id: '2', link: '/admin/team', title: 'teams' }
                  ]}
               />
            </Stack>

            <MainTeamList />
         </Container>
      </ToolbarComponent>
   );
};

export default AdminTeam;
