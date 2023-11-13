import * as React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Box, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

interface IUserAvatar {
   url: string;
   alt: string;
   email: string;
}

const settings = [{ id: 1, text: 'Main', icon: <HomeIcon />, settingFunction: () => {} }];

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
            <Tooltip title="Open settings">
               <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                  <Avatar
                     alt={alt}
                     src={url}
                     sx={{ width: 56, height: 56, bgcolor: '#3a10e5' }}
                     onClick={handleOpenUserMenu}
                  >
                     {url ? null : email?.[0]?.toUpperCase()}
                  </Avatar>
               </Badge>
            </Tooltip>
            <Menu
               sx={{ mt: '45px' }}
               id="menu-appbar"
               anchorEl={anchorElUser}
               anchorOrigin={{
                  vertical: 'top',
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
                     <ListItemText primary={setting.text} />
                  </MenuItem>
               ))}
            </Menu>
         </Box>
      </>
   );
});

export default UserAvatar;
