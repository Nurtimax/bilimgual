import React, { FC } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import QuizIcon from '@mui/icons-material/Quiz';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import CategoryIcon from '@mui/icons-material/Category';

import { ERole } from '../../types/role';
import { logOutHandler } from '../../store/slices/authentication-slice';
import HeaderMobileMenu from '../UI/menu/HeaderMobileMenu';

import AdminLinksList from './AdminLinksList';
import LinksList from './LinksList';

interface LinksProps {
   role: ERole;
}

const StyledLinks = styled(Box)(() => ({
   width: '100%',

   display: 'flex',
   alignItems: 'center'
}));

const Links: FC<LinksProps> = ({ role }) => {
   const roleCondition = role?.includes('ADMIN');

   return (
      <StyledLinks>
         <HeaderMobileMenu
            buttons={
               <>
                  {roleCondition ? <AdminLinksList /> : <LinksList />}
                  <Button sx={{ width: '140px' }} variant="login" onClick={logOutHandler}>
                     log out
                  </Button>
               </>
            }
            menuItems={
               <Box role="presentation">
                  <List>
                     {[
                        { title: 'tests', icon: <QuizIcon />, click: () => {} },
                        roleCondition
                           ? { title: 'submitted results', icon: <TurnedInIcon />, click: () => {} }
                           : { title: 'MY RESULTS', icon: <CategoryIcon />, click: () => {} },
                        { title: 'log out', icon: <ExitToAppIcon color="error" />, click: logOutHandler }
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
      </StyledLinks>
   );
};

export default Links;
