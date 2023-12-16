import React from 'react';
import { Container } from '@mui/material';

import ToolbarComponent from '../../../../component/page/ToolbarComponent';
import MainAdminTestAdd from '../../../../component/@admin/add';

const AdminRoleTestAdd = () => {
   return (
      <ToolbarComponent>
         <Container>
            <MainAdminTestAdd />
         </Container>
      </ToolbarComponent>
   );
};

export default AdminRoleTestAdd;
