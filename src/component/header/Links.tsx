import React, { FC } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import QuizIcon from '@mui/icons-material/Quiz';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import CategoryIcon from '@mui/icons-material/Category';

import { ERole } from '../../types/role';
import { useAppDispatch } from '../../store/hooks';
import { logOutAuthThunk } from '../../store/slices/authentication-slice';
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

   const dispatch = useAppDispatch();

   const logOutHandler = () => {
      dispatch(logOutAuthThunk());
   };

   return (
      <StyledLinks>
         <HeaderMobileMenu
            buttons={roleCondition ? <AdminLinksList /> : <LinksList />}
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
