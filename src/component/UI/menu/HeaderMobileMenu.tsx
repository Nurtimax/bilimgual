import React, { FC, ReactNode, memo } from 'react';
import { Drawer, IconButton, useMediaQuery } from '@mui/material';
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
         <IconButton onClick={handleMenu}>
            <MenuIcon />
         </IconButton>

         <Drawer
            anchor="right"
            variant="temporary"
            sx={{ width: '100vw', minWidth: '100vw' }}
            open={!!anchorEl}
            onClose={handleClose}
         >
            {menuItems}
         </Drawer>
      </>
   );
});

export default HeaderMobileMenu;
