import * as React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Box, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

import { logOutHandler } from '../../../store/slices/authentication-slice';

interface IUserAvatar {
   url: string;
   alt: string;
   email: string;
}

const settings = [
   { id: 1, text: 'Main', icon: <HomeIcon />, settingFunction: () => {} },
   { id: 2, text: 'Log out', icon: <LogoutIcon />, settingFunction: logOutHandler }
];

const UserAvatar: React.FC<IUserAvatar> = React.memo(({ alt, url, email }) => {
   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <>
         <Box sx={{ flexGrow: 0 }}>
            <IconButton
               onClick={handleOpenUserMenu}
               aria-controls={anchorElUser ? 'basic-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={anchorElUser ? 'true' : undefined}
            >
               <Tooltip title="Open settings">
                  <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                     <Avatar alt={alt} src={url} sx={{ width: 56, height: 56, bgcolor: '#3a10e5' }}>
                        {url ? null : email?.[0]?.toUpperCase()}
                     </Avatar>
                  </Badge>
               </Tooltip>
            </IconButton>
            <Menu
               sx={{ mt: '45px' }}
               id="menu-appbar"
               anchorEl={anchorElUser}
               anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right'
               }}
               keepMounted
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
               }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
            >
               {settings.map((setting) => (
                  <MenuItem
                     key={setting.id}
                     onClick={() => {
                        handleCloseUserMenu();
                        if (typeof setting.settingFunction === 'function') {
                           setting.settingFunction();
                        }
                     }}
                  >
                     <ListItemIcon>{setting.icon}</ListItemIcon>
                     <ListItemText primaryTypographyProps={{ fontSize: 14 }} primary={setting.text} />
                  </MenuItem>
               ))}
            </Menu>
         </Box>
      </>
   );
});

export default UserAvatar;
