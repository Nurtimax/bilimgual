import { Container } from '@mui/material';
import React from 'react';

import MainClientTestItem from '../../../component/@client/tests';
import MainClientQuitTest from '../../../component/@client/tests/quit';

const ClientTestById = () => {
   return (
      <>
         <MainClientQuitTest />
         <Container>
            <MainClientTestItem />
         </Container>
      </>
   );
};

export default ClientTestById;
