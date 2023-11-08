import React from 'react';
import { Box, Container, styled } from '@mui/material';
import { useRouter } from 'next/router';

import { useAppSelector } from '../store/hooks';
import { authSelector } from '../store/helpers/auth';

const StyledSignUp = styled(Box)`
   background: #6b0fa9;
`;

const SignUp = () => {
   const { fields } = useAppSelector((state) => authSelector(state));
   const { replace } = useRouter();

   if (fields.emailVerified) {
      replace('/');
      return <></>;
   }
   return (
      <StyledSignUp>
         <Container></Container>
      </StyledSignUp>
   );
};

export default SignUp;
