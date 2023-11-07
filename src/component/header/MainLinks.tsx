import React, { FC } from 'react';
import { Box, Button, IconButton, Menu, MenuItem, styled, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

const StyledMainLinks = styled(Box)(() => ({
   color: 'black',

   display: 'flex',
   justifyContent: 'flex-end',
   gap: '24px',

   width: '100%'
}));

const MainLinks: FC = () => {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const isMobile = useMediaQuery('(min-width:600px)');
   const pathname = useRouter();

   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <StyledMainLinks>
         {!isMobile ? (
            <>
               <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
               >
                  <MenuIcon />
               </IconButton>
               <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                     vertical: 'top',
                     horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                     vertical: 'top',
                     horizontal: 'right'
                  }}
                  PaperProps={{ sx: { background: 'white', color: 'black' } }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
               >
                  <MenuItem onClick={handleClose}>TO COME IN</MenuItem>
                  <MenuItem onClick={handleClose}>REGISTER</MenuItem>
               </Menu>
            </>
         ) : (
            <>
               <Button variant="come">TO COME IN</Button>
               <Button variant="register" onClick={() => pathname.push('sign-in')}>
                  REGISTER
               </Button>
            </>
         )}
      </StyledMainLinks>
   );
};

export default MainLinks;
