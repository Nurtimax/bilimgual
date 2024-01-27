import { Container, Stack } from '@mui/material';
import React from 'react';

import MainClientTest from '../../component/@client';
import ToolbarComponent from '../../component/page/ToolbarComponent';
import ClientFooter from '../../component/@client/footer';

const ClientTests = () => {
   return (
      <ToolbarComponent>
         <Stack alignContent="space-between" height="86vh" justifyContent="space-between" gap={2}>
            <Container>
               <MainClientTest />
            </Container>
            <ClientFooter />
         </Stack>
      </ToolbarComponent>
   );
};

export default ClientTests;
