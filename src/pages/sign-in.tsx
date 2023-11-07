import { Box, Container, styled } from '@mui/material';
import React, { FC } from 'react';

import MainSignIn from '../component/sign-in';

const StyledSignIn = styled(Box)`
   width: 100%;
   height: 100vh;
   background: #6b0fa9;
`;

const SignIn: FC = () => {
   return (
      <StyledSignIn>
         <Container>
            <MainSignIn />
         </Container>
      </StyledSignIn>
   );
};

export default SignIn;
