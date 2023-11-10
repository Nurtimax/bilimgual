import React from 'react';
import { Box, Container, styled } from '@mui/material';
import { useRouter } from 'next/router';

import { useAppSelector } from '../store/hooks';
import { authSelector } from '../store/helpers/auth';
import MainSignUp from '../component/sign-up';
import Page from '../component/page';

const StyledSignUp = styled(Box)`
   background: #6b0fa9;
`;

const SignUp = () => {
   const { fields } = useAppSelector((state) => authSelector(state));
   const { replace } = useRouter();

   if (fields.email) {
      replace('/');
      return <></>;
   }

   return (
      <Page canonical="/sign-up" description="Bilingual Sign up" title="Sign up">
         <StyledSignUp>
            <Container>
               <MainSignUp />
            </Container>
         </StyledSignUp>
      </Page>
   );
};

export default SignUp;
