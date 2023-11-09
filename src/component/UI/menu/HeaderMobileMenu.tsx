import React, { FC, ReactNode, memo } from 'react';
import { IconButton, Menu, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface IHeaderMobileMenu {
   menuItems: ReactNode;
   buttons: ReactNode;
}

const HeaderMobileMenu: FC<IHeaderMobileMenu> = memo(({ menuItems, buttons }) => {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const isMobile = useMediaQuery('(min-width:600px)');

   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   if (isMobile) {
      return <>{buttons}</>;
   }

   return (
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
            {menuItems}
         </Menu>
      </>
   );
});

export default HeaderMobileMenu;
