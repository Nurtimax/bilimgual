import React, { useCallback } from 'react';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

import LoginCard from '../UI/login/LoginCard';

import Forms from './Forms';

const MainSignUp = () => {
   const pathname = useRouter();

   const handleBackNavigate = useCallback(() => {
      pathname.back();
   }, [pathname]);

   return (
      <LoginCard
         cardHeaderTitle="Create an Account"
         forms={<Forms />}
         handleBackNavigate={handleBackNavigate}
         haveAccountNode={
            <>
               ALREADY HAVE AN ACCOUNT?{' '}
               <Typography
                  variant="bodySmall"
                  sx={{ cursor: 'pointer', color: '#3A10E5' }}
                  onClick={() => pathname.replace('sign-in')}
               >
                  LOG IN
               </Typography>
            </>
         }
      />
   );
};

export default MainSignUp;
