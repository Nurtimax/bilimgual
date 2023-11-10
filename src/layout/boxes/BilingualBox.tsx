import React, { FC } from 'react';
import { Box, Toolbar, styled } from '@mui/material';

import MainHeader from '../header/MainHeader';
import Banner from '../../component/banner';

interface BilingualBoxProps {
   [key: string]: unknown;
}

const StyledBilingualBox = styled(Box)(({ theme }) => ({
   background: theme.palette.warning.main
}));

const BilingualBox: FC<BilingualBoxProps> = () => {
   return (
      <StyledBilingualBox>
         <MainHeader />
         <Toolbar />

         <Banner />
      </StyledBilingualBox>
   );
};

export default BilingualBox;
