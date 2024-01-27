import React from 'react';
import { Container } from '@mui/material';

import ToolbarComponent from '../../../../component/page/ToolbarComponent';
import TestCompleted from '../../../../component/@client/tests/completed';

const MainTestCompleted = () => {
   return (
      <ToolbarComponent>
         <Container maxWidth="md">
            <TestCompleted />
         </Container>
      </ToolbarComponent>
   );
};

export default MainTestCompleted;
