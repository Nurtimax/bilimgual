import React, { FC } from 'react';
import { Box, Button, MenuItem, styled } from '@mui/material';
import { useRouter } from 'next/router';

import HeaderMobileMenu from '../UI/menu/HeaderMobileMenu';

const StyledMainLinks = styled(Box)(() => ({
   color: 'black',

   display: 'flex',
   justifyContent: 'flex-end',
   gap: '24px',

   width: '100%'
}));

const MainLinks: FC = () => {
   const pathname = useRouter();

   const handleSignIn = () => {
      pathname.push('sign-in');
   };

   const handleSignUp = () => {
      pathname.push('sign-up');
   };

   return (
      <StyledMainLinks>
         <HeaderMobileMenu
            buttons={
               <>
                  <Button variant="come" onClick={handleSignIn}>
                     TO COME IN
                  </Button>
                  <Button variant="register" onClick={handleSignUp}>
                     REGISTER
                  </Button>
               </>
            }
            menuItems={
               <>
                  <MenuItem onClick={handleSignIn}>TO COME IN</MenuItem>
                  <MenuItem onClick={handleSignUp}>REGISTER</MenuItem>
               </>
            }
         />
      </StyledMainLinks>
   );
};

export default MainLinks;
