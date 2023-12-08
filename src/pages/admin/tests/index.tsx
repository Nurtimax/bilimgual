import { Box, Container, Toolbar } from '@mui/material';
import React from 'react';

import PracticeTest from '../../../component/@client/tests/practice-test';
const AdminTest = () => {
   return (
      <Box>
         <Toolbar />
         <Toolbar />

         <Container>
            {/* Admin Test  */}
            <PracticeTest />
         </Container>
      </Box>
   );
};

export default AdminTest;
