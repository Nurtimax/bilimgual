import { Container, Stack, Typography } from '@mui/material';
import React from 'react';

import Breadcrumbs from '../../../../component/UI/breadcrumbs/Breadcrumbs';
import MainAdminTeam from '../../../../component/@root/team';
import ToolbarComponent from '../../../../component/page/ToolbarComponent';

const TeamEdit = () => {
   return (
      <ToolbarComponent>
         <Container>
            <Stack py={3}>
               <Typography variant="h4" component="h1">
                  Create new user
               </Typography>
               <Breadcrumbs
                  breadcrumbs={[
                     { id: '1', link: '/admin', title: 'Admin' },
                     { id: '2', link: '/admin/team', title: 'teams' },
                     { id: '3', link: '/admin/team/edit', title: 'create team' }
                  ]}
               />
            </Stack>

            <MainAdminTeam />
         </Container>
      </ToolbarComponent>
   );
};

export default TeamEdit;
