import React from 'react';
import { Container, Stack, Typography } from '@mui/material';

import MainAdminBanner from '../../../component/@root/banner';
import Breadcrumbs from '../../../component/UI/breadcrumbs/Breadcrumbs';
import ToolbarComponent from '../../../component/page/ToolbarComponent';

const AdminBanner = () => {
   return (
      <ToolbarComponent>
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
      </ToolbarComponent>
   );
};

export default AdminBanner;
