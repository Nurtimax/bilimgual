import React, { FC } from 'react';
import { Box, Container, styled } from '@mui/material';

import CardChart from '../card-chart';

interface IMainDevelopmentsProps {
   [key: string]: unknown;
}

const StyledDevelopment = styled(Box)(() => ({
   height: '100vh',
   display: 'grid',
   placeItems: 'center'
}));

const MainDevelopment: FC<IMainDevelopmentsProps> = () => {
   return (
      <StyledDevelopment>
         <Container>
            <CardChart />
         </Container>
      </StyledDevelopment>
   );
};

export default MainDevelopment;
