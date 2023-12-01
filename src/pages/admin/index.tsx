import React, { memo } from 'react';
import { Box, Container, Toolbar, styled } from '@mui/material';

import MainAdmin from '../../component/admin';

const RootStyle = styled(Box)`
   background-color: #afdcf0;
   min-height: 100vh;
`;

const Admin = memo(() => {
   return (
      <RootStyle>
         <Container>
            <Toolbar />
            <Toolbar />

            <MainAdmin />
         </Container>
      </RootStyle>
   );
});

export default Admin;
