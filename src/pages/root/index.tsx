import React, { memo } from 'react';
import { Container, styled } from '@mui/material';

import MainAdmin from '../../component/@admin';
import ToolbarComponent from '../../component/page/ToolbarComponent';

const RootStyle = styled(ToolbarComponent)`
   background-color: #afdcf0;
   min-height: 100vh;
`;

const Admin = memo(() => {
   return (
      <RootStyle>
         <Container>
            <MainAdmin />
         </Container>
      </RootStyle>
   );
});

export default Admin;
