import React from 'react';
import { Container } from '@mui/material';

import ToolbarComponent from '../../component/page/ToolbarComponent';
import MainClientResults from '../../component/@client/results';

const ClientRoleMyResults = () => {
   return (
      <ToolbarComponent>
         <Container>
            <MainClientResults />
         </Container>
      </ToolbarComponent>
   );
};

export default ClientRoleMyResults;
