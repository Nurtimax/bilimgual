import { Box, Container, styled } from '@mui/material';
import React from 'react';

import MainFooter from '../../component/footer';

const RootStyle = styled(Box)`
   background: #262626;
   color: white;
`;

const Footer = () => {
   return (
      <RootStyle>
         <Container>
            <MainFooter />
         </Container>
      </RootStyle>
   );
};

export default Footer;
