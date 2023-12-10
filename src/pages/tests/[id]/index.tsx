import { Container, Toolbar } from '@mui/material';
import React from 'react';

import MainClientTestItem from '../../../component/@client/tests';

const ClientTestById = () => {
   return (
      <>
         <Toolbar />
         <Toolbar />

         <Container>
            <MainClientTestItem />
         </Container>
      </>
   );
};

export default ClientTestById;
