import { Container } from '@mui/material';
import React from 'react';

import MainClientTestItem from '../../../component/@client/tests';
import ToolbarComponent from '../../../component/page/ToolbarComponent';

const ClientTestById = () => {
   return (
      <ToolbarComponent>
         <Container>
            <MainClientTestItem />
         </Container>
      </ToolbarComponent>
   );
};

export default ClientTestById;
