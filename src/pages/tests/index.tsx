import { Container, Toolbar } from '@mui/material';
import React from 'react';

import MainClientTest from '../../component/@client/tests';

const ClientTests = () => {
   return (
      <>
         <Toolbar />
         <Toolbar />

         <Container>
            <MainClientTest />
         </Container>
      </>
   );
};

export default ClientTests;
