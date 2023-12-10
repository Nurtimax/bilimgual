import { Container } from '@mui/material';
import React from 'react';

import MainClientTest from '../../component/@client';
import ToolbarComponent from '../../component/page/ToolbarComponent';

const ClientTests = () => {
   return (
      <ToolbarComponent>
         <Container>
            <MainClientTest />
         </Container>
      </ToolbarComponent>
   );
};

export default ClientTests;
