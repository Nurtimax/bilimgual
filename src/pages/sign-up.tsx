import React from 'react';
import { Container, styled } from '@mui/material';
import { useRouter } from 'next/router';

import { useAppSelector } from '../store/hooks';
import { authSelector } from '../store/helpers/auth';
import MainSignUp from '../component/sign-up';
import Page from '../component/page';
import ToolbarComponent from '../component/page/ToolbarComponent';

const StyledSignUp = styled(ToolbarComponent)`
   background: #6b0fa9;
   min-height: 100vh;
   padding-bottom: 3rem;
`;

const SignUp = () => {
   const { fields } = useAppSelector(authSelector);
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
