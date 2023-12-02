import { Box, Container, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';

import Breadcrumbs from '../../../component/UI/breadcrumbs/Breadcrumbs';
import MainAdminUsefull from '../../../component/usefull-videos/MainAdminUsefull';

const AdminVideos = () => {
   return (
      <Box>
         <Toolbar />
         <Toolbar />
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
      </Box>
   );
};

export default AdminVideos;
