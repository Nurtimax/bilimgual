import { Container, Stack, Typography } from '@mui/material';
import React from 'react';

import Breadcrumbs from '../../../component/UI/breadcrumbs/Breadcrumbs';
import MainAdminUsefull from '../../../component/@development/usefull-videos/MainAdminUsefull';
import ToolbarComponent from '../../../component/page/ToolbarComponent';

const AdminVideos = () => {
   return (
      <ToolbarComponent>
         <Container>
            <Stack py={3}>
               <Typography variant="h4" component="h1" color="black">
                  Videos
               </Typography>
               <Breadcrumbs
                  color="black"
                  breadcrumbs={[
                     { id: '1', link: '/admin', title: 'Admin' },
                     { id: '2', title: 'Videos' }
                  ]}
               />
            </Stack>
            <MainAdminUsefull />
         </Container>
      </ToolbarComponent>
   );
};

export default AdminVideos;
