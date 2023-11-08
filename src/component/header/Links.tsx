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

const StyledButton = styled(Button)(() => ({
   width: '45%'
}));

const Links: FC<LinksProps> = ({ role }) => {
   const { replace } = useRouter();

   const handleLogOut = () => {
      replace('sign-out');
   };

   return (
      <StyledLinks>
         {role === 'ADMIN' ? <AdminLinksList /> : <LinksList />}
         <StyledButton variant="login" onClick={handleLogOut}>
            log out
         </StyledButton>
      </StyledLinks>
   );
};

export default Links;
