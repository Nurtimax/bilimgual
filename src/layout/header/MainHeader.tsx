import { AppBar, Container, styled, AppBarProps } from '@mui/material';
import React, { FC, memo, ReactNode } from 'react';

import HeaderWrapper from '../../component/header/HeaderWrapper';

interface StyledAppBarProps extends AppBarProps {
   /*
    * Define any additional props for the component here
    */
   children?: ReactNode;
}

const StyledMainHeader: FC<StyledAppBarProps> = styled(AppBar)(() => ({
   transition: 'background .5s'
}));

const MainHeader: FC<AppBarProps> = memo((props) => {
   return (
      <StyledMainHeader {...props}>
         <Container>
            <HeaderWrapper />
         </Container>
      </StyledMainHeader>
   );
});

export default MainHeader;
