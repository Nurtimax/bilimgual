import React, { FC } from 'react';
import { Box, Button, styled } from '@mui/material';

import AdminLinksList from './AdminLinksList';
import LinksList from './LinksList';

interface LinksProps {
   role: string;
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
         <StyledButton variant="outlined">log out</StyledButton>
      </StyledLinks>
   );
};

export default Links;
