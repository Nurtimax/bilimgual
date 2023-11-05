import React, { FC } from 'react';
import { Box, Container, styled } from '@mui/material';

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
            <h1>Bilingual Development tools</h1>
         </Container>
      </StyledDevelopment>
   );
};

export default MainDevelopment;
