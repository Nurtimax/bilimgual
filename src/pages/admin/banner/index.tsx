import React from 'react';
import { Container, Toolbar } from '@mui/material';

import MainAdminBanner from '../../../component/admin/banner';
import MainHeader from '../../../layout/header/MainHeader';

const AdminBanner = () => {
   return (
      <Container>
         <MainHeader sx={{ background: '#fff' }} />
         <Toolbar />
         <Toolbar />

         <MainAdminBanner />
      </Container>
   );
};

export default AdminBanner;
