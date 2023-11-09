import React, { FC } from 'react';
import { Box, Button, MenuItem, styled } from '@mui/material';
import { useRouter } from 'next/router';

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
   const { push } = useRouter();
   return (
      <StyledLinks>
         <HeaderMobileMenu
            buttons={
               <>
                  {role === 'ADMIN' ? <AdminLinksList /> : <LinksList />}
                  <Button sx={{ width: '140px' }} variant="login" onClick={logOutHandler}>
                     log out
                  </Button>
               </>
            }
            menuItems={
               <>
                  <MenuItem onClick={() => push('/tests')}>tests</MenuItem>

                  {role === 'ADMIN' ? (
                     <MenuItem onClick={() => push('/admin-result')}>submitted results</MenuItem>
                  ) : (
                     <MenuItem onClick={() => push('/my-result')}>MY RESULTS</MenuItem>
                  )}

                  <MenuItem onClick={logOutHandler}>log out</MenuItem>
               </>
            }
         />
      </StyledLinks>
   );
};

export default Links;
