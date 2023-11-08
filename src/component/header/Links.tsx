import React, { FC } from 'react';
import { Box, Button, styled } from '@mui/material';

import { ERole } from '../../types/role';
import { logOutHandler } from '../../store/slices/authentication-slice';

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
   return (
      <StyledLinks>
         {role === 'ADMIN' ? <AdminLinksList /> : <LinksList />}
         <Button sx={{ width: '140px' }} variant="login" onClick={logOutHandler}>
            log out
         </Button>
      </StyledLinks>
   );
};

export default Links;
