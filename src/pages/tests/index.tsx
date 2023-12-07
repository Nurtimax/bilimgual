import { Container, Toolbar } from '@mui/material';
import React from 'react';

import MainClientTest from '../../component/@client/tests';
import PracticeTest from '../../component/@client/tests/practice-test';

const ClientTests = () => {
   return (
      <>
         <Toolbar />
         <Toolbar />

         <Container>
            <MainClientTest />
            <PracticeTest />
         </Container>
      </>
   );
};

export default ClientTests;
