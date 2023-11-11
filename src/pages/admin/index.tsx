import React, { memo } from 'react';
import { Box, Container, Toolbar, styled } from '@mui/material';

import MainAdmin from '../../component/admin';
import MainHeader from '../../layout/header/MainHeader';

const RootStyle = styled(Box)`
   background-color: #afdcf0;
   height: 100vh;
`;

const Admin = memo(() => {
   return (
      <RootStyle>
         <Container>
            <MainHeader sx={{ background: '#fff' }} />
            <Toolbar />
            <Toolbar />

            <MainAdmin />
         </Container>
      </RootStyle>
   );
});

export default Admin;
