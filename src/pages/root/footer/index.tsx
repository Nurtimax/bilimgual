import { Box, Container, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';

import MainAdminFooter from '../../../component/@admin/footer';
import Breadcrumbs from '../../../component/UI/breadcrumbs/Breadcrumbs';

const AdminFooter = () => {
   return (
      <Box sx={{ background: '#262626', minHeight: '100vh' }}>
         <Toolbar />
         <Toolbar />
         <Container>
            <Stack py={3}>
               <Typography variant="h4" component="h1" color="white">
                  FAQ:
               </Typography>
               <Breadcrumbs
                  color="white"
                  breadcrumbs={[
                     { id: '1', link: '/admin', title: 'Admin' },
                     { id: '2', title: 'FAQ' }
                  ]}
               />
            </Stack>

            <MainAdminFooter />
         </Container>
      </Box>
   );
};

export default AdminFooter;
