import React, { FC } from 'react';
import { Box, Button, styled } from '@mui/material';
import { useRouter } from 'next/router';

import { ERole } from '../../types/role';

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
   const { replace } = useRouter();

   const handleLogOut = () => {
      replace('sign-out');
   };

   return (
      <StyledLinks>
         {role === 'ADMIN' ? <AdminLinksList /> : <LinksList />}
         <Button sx={{ width: '140px' }} variant="login" onClick={handleLogOut}>
            log out
         </Button>
      </StyledLinks>
   );
};

export default Links;
