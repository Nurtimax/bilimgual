import { Container, styled } from '@mui/material';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

import MainSignIn from '../component/sign-in';
import { useAppSelector } from '../store/hooks';
import { authSelector } from '../store/helpers/auth';
import Page from '../component/page';
import ToolbarComponent from '../component/page/ToolbarComponent';

const StyledSignIn = styled(ToolbarComponent)`
   background: #6b0fa9;
   min-height: 100vh;
   padding-bottom: 3rem;
`;

const SignIn: FC = () => {
   const { fields } = useAppSelector(authSelector);
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
