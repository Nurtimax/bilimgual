import React from 'react';
import { Container } from '@mui/material';

import ClientRole from '../../../component/@client/tests/components/ClientRole';
import ToolbarComponent from '../../../component/page/ToolbarComponent';

const AdminResults = () => {
   return (
      <ToolbarComponent>
         <Container>
            <ClientRole />
         </Container>
      </ToolbarComponent>
   );
};

export default AdminResults;
