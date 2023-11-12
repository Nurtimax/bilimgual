import * as React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

interface IUserAvatar {
   url: string;
   alt: string;
   email: string;
}

const UserAvatar: React.FC<IUserAvatar> = React.memo(({ alt, url, email }) => {
   return (
      <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
         <Avatar alt={alt} src={url} sx={{ width: 56, height: 56, bgcolor: '#3a10e5' }}>
            {url ? null : email?.[0]?.toUpperCase()}
         </Avatar>
      </Badge>
   );
});

export default UserAvatar;
