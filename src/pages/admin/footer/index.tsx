import { Container, Toolbar } from '@mui/material';
import React from 'react';

import MainAdminFooter from '../../../component/admin/footer';
import MainHeader from '../../../layout/header/MainHeader';

const AdminFooter = () => {
   return (
      <Container>
         <MainHeader sx={{ background: '#fff' }} />
         <Toolbar />
         <Toolbar />

         <MainAdminFooter />
      </Container>
   );
};

export default AdminFooter;
