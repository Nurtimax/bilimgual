import { Box, Container, Toolbar } from '@mui/material';
import React from 'react';

import MainAdminFooter from '../../../component/admin/footer';
import MainHeader from '../../../layout/header/MainHeader';

const AdminFooter = () => {
   return (
      <Box sx={{ background: '#262626', minHeight: '100vh' }}>
         <Container>
            <MainHeader sx={{ background: '#fff' }} />
            <Toolbar />
            <Toolbar />

            <MainAdminFooter />
         </Container>
      </Box>
   );
};

export default AdminFooter;
