import * as React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Box, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export interface IAvatarSettings {
   id?: number;
   text?: string;
   icon: React.ReactNode;
   settingFunction: () => void;
}

interface IUserAvatar {
   url: string;
   alt: string;
   email: string;
   settings: IAvatarSettings[];
}

const UserAvatar: React.FC<IUserAvatar> = React.memo(({ alt, url, email, settings }) => {
   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
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
            <MenuItem sx={{ minHeight: 0, maxHeight: 10 }}>
               <ListItemIcon>
                  <EmailIcon fontSize="small" />
               </ListItemIcon>
               <ListItemText primaryTypographyProps={{ fontSize: 10 }} primary={email} />
            </MenuItem>

            <Divider />

            {settings.map((setting) => (
               <MenuItem
                  key={setting.id}
                  sx={{ minWidth: 150 }}
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
   );
});

export default UserAvatar;
