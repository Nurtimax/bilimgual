import React, { memo } from 'react';
import { Container, Toolbar } from '@mui/material';

import MainAdmin from '../../component/admin';
import MainHeader from '../../layout/header/MainHeader';

const Admin = memo(() => {
   return (
      <Container>
         <MainHeader />
         <Toolbar />

         <MainAdmin />
      </Container>
   );
});

export default Admin;
