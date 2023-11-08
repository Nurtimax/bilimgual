import { Box, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import LoginCard from '../UI/sign-in/LoginCard';

import Forms from './Forms';

const MainSignIn = () => {
   const pathname = useRouter();

   const handleBackNavigate = useCallback(() => {
      pathname.back();
   }, [pathname]);

   return (
      <LoginCard
         cardHeaderTitle="Sign in"
         forms={<Forms />}
         handleBackNavigate={handleBackNavigate}
         haveAccountNode={
            <Box>
               Don't have an account?{' '}
               <Typography
                  variant="bodySmall"
                  sx={{ cursor: 'pointer', color: '#3A10E5' }}
                  onClick={() => pathname.replace('sign-up')}
               >
                  Register
               </Typography>
            </Box>
         }
      />
   );
};

export default MainSignIn;
