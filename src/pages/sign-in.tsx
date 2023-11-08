import { Box, Container, styled } from '@mui/material';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

import MainSignIn from '../component/sign-in';
import { useAppSelector } from '../store/hooks';
import { authSelector } from '../store/slices/authentication-slice';

const StyledSignIn = styled(Box)`
   background: #6b0fa9;
`;

const SignIn: FC = () => {
   const { fields } = useAppSelector((state) => authSelector(state));
   const { replace } = useRouter();

   if (fields.emailVerified) {
      replace('/');
      return <></>;
   }

   return (
      <StyledSignIn>
         <Container>
            <MainSignIn />
         </Container>
      </StyledSignIn>
   );
};

export default SignIn;
