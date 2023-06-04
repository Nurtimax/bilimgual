import { FC } from 'react';
import { Box, styled } from '@mui/material';

import { Button } from '../UI';

interface MainLinksProps {
   [key: string]: unknown;
}

const StyledMainLinks = styled(Box)(() => ({
   color: 'black',

   display: 'flex',
   justifyContent: 'flex-end',
   gap: '24px',

   width: '100%'
}));

const MainLinks: FC<MainLinksProps> = () => {
   return (
      <StyledMainLinks>
         <Button variant="come">TO COME IN</Button>
         <Button variant="register">REGISTER</Button>
      </StyledMainLinks>
   );
};

export default MainLinks;
