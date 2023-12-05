import React, { FC } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import { useRouter } from 'next/router';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import HeaderMobileMenu from '../../UI/menu/HeaderMobileMenu';

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
               <Box role="presentation">
                  <List>
                     {[
                        { title: 'TO COME IN', icon: <LoginIcon />, click: handleSignIn },
                        { title: 'REGISTER', icon: <HowToRegIcon />, click: handleSignUp }
                     ].map((text) => (
                        <ListItem
                           key={text.title}
                           disablePadding
                           sx={{ borderRadius: '5px', py: 0 }}
                           onClick={text.click}
                        >
                           <ListItemButton>
                              <ListItemIcon>{text.icon}</ListItemIcon>
                              <ListItemText
                                 primaryTypographyProps={{ sx: { textTransform: 'uppercase' } }}
                                 primary={text.title}
                              />
                           </ListItemButton>
                        </ListItem>
                     ))}
                  </List>
               </Box>
            }
         />
      </StyledMainLinks>
   );
};

export default MainLinks;
