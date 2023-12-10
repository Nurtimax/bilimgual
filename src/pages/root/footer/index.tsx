import { Container, Stack, Typography } from '@mui/material';
import React from 'react';

import MainAdminFooter from '../../../component/@admin/footer';
import Breadcrumbs from '../../../component/UI/breadcrumbs/Breadcrumbs';
import ToolbarComponent from '../../../component/page/ToolbarComponent';

const AdminFooter = () => {
   return (
      <ToolbarComponent sx={{ background: '#262626', minHeight: '100vh' }}>
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
      </ToolbarComponent>
   );
};

export default AdminFooter;
