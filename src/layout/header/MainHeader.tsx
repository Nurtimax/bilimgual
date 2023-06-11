import { AppBar, Container, styled, AppBarProps } from '@mui/material';
import React, { FC, memo, ReactNode } from 'react';

import HeaderWrapper from '../../component/header/HeaderWrapper';
import ElevationScroll from '../elevation-scroll';

interface MainHeaderProps {
   [key: string]: unknown;
}

interface StyledAppBarProps extends AppBarProps {
   /*
    * Define any additional props for the component here
    */
   children?: ReactNode;
}

const StyledMainHeader: FC<StyledAppBarProps> = styled(AppBar)(() => ({
   transition: 'background .5s'
}));

const MainHeader: FC<MainHeaderProps> = memo(() => {
   return (
      <ElevationScroll>
         <StyledMainHeader>
            <Container>
               <HeaderWrapper />
            </Container>
         </StyledMainHeader>
      </ElevationScroll>
   );
});

export default MainHeader;
