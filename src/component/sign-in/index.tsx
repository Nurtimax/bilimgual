import { Box, Card, CardContent, CardHeader, Divider, IconButton, Paper } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import Link from 'next/link';

import SignInBilingualLogo from '../../assets/icons/SignIn';

import Forms from './Forms';
import SocialFroms from './SocialFroms';

const MainSignIn = () => {
   const pathname = useRouter();

   const handleBackNavigate = () => {
      pathname.back();
   };

   return (
      <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
         <Card elevation={2} component={Paper} sx={{ background: 'white', width: '40%', p: 4 }}>
            <CardHeader
               action={
                  <IconButton onClick={handleBackNavigate}>
                     <CloseIcon />
                  </IconButton>
               }
               title={
                  <Box sx={{ display: 'grid', placeItems: 'center' }}>
                     <SignInBilingualLogo />
                     Sign in
                  </Box>
               }
               titleTypographyProps={{ textAlign: 'center', variant: 'body1' }}
            />

            <CardContent>
               <Forms />
            </CardContent>

            <Divider sx={{ color: 'black', p: 2 }}>or</Divider>

            <CardContent>
               <SocialFroms />
            </CardContent>

            <CardContent sx={{ color: 'black', display: 'flex', justifyContent: 'center', gap: 0.5 }}>
               Don't have an account?
               <Link href="register" style={{ color: '#3A10E5' }}>
                  Register
               </Link>
            </CardContent>
         </Card>
      </Box>
   );
};

export default MainSignIn;
