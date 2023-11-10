import { Box, Container, styled } from '@mui/material';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

import MainSignIn from '../component/sign-in';
import { useAppSelector } from '../store/hooks';
import { authSelector } from '../store/helpers/auth';
import Page from '../component/page';

const StyledSignIn = styled(Box)`
   background: #6b0fa9;
`;

const SignIn: FC = () => {
   const { fields } = useAppSelector((state) => authSelector(state));
   const { replace } = useRouter();

   if (fields.email) {
      replace('/');
      return <></>;
   }

   return (
      <Page canonical="/sign-in" description="Bilingual Sign in page" title="Sign in">
         <StyledSignIn>
            <Container>
               <MainSignIn />
            </Container>
         </StyledSignIn>
      </Page>
   );
};

export default SignIn;
