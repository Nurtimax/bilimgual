import React from 'react';
import { Box, Container, Stack, Toolbar, Typography } from '@mui/material';

import MainAdminBanner from '../../../component/@admin/banner';
import Breadcrumbs from '../../../component/UI/breadcrumbs/Breadcrumbs';

const AdminBanner = () => {
   return (
      <Box>
         <Toolbar />
         <Toolbar />
         <Container>
            <Stack py={3}>
               <Typography variant="h4" component="h1">
                  Sliders
               </Typography>
               <Breadcrumbs
                  color="black"
                  breadcrumbs={[
                     { id: '1', link: '/admin', title: 'Admin' },
                     { id: '2', title: 'sliders' }
                  ]}
               />
            </Stack>

            <MainAdminBanner />
         </Container>
      </Box>
   );
};

export default AdminBanner;
