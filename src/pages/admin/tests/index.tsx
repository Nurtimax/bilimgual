import React from 'react';
import { Container } from '@mui/material';

import ToolbarComponent from '../../../component/page/ToolbarComponent';
import MainAdmin from '../../../component/@admin';

const AdminTest = () => {
   return (
      <ToolbarComponent>
         <Container>
            <MainAdmin />
         </Container>
      </ToolbarComponent>
   );
};

export default AdminTest;
