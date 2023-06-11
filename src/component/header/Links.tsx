import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import { ERole } from '../../types/role';
import { Button } from '../UI';

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
   return (
      <StyledLinks>
         {role === 'ADMIN' ? <AdminLinksList /> : <LinksList />}
         <StyledButton variant="login">log out</StyledButton>
      </StyledLinks>
   );
};

export default Links;
