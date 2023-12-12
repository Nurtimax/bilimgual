import React from 'react';
import { Container } from '@mui/material';

import ToolbarComponent from '../../../../../component/page/ToolbarComponent';
import MainAdminTestAddVariants from '../../../../../component/@admin/add/variants';

const AdminTestAddVariants = () => {
   return (
      <ToolbarComponent>
         <Container>
            <MainAdminTestAddVariants />
         </Container>
      </ToolbarComponent>
   );
};

export default AdminTestAddVariants;
