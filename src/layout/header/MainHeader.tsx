import { AppBar, Container, styled, AppBarProps, useScrollTrigger } from '@mui/material';
import React, { cloneElement, FC, memo, ReactElement, ReactNode } from 'react';

import HeaderWrapper from '../../component/header/HeaderWrapper';

interface MainHeaderProps {
   [key: string]: unknown;
}

interface StyledAppBarProps extends AppBarProps {
   /*
    * Define any additional props for the component here
    */
   children?: ReactNode;
}

interface Props {
   /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
   window?: () => Window;
   children: ReactElement;
}

const StyledMainHeader: FC<StyledAppBarProps> = styled(AppBar)(() => ({
   transition: 'background .5s',
   background: '#FFFFFF',
   boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.03)',
   '&.background__none': {
      boxShadow: 'none',
      background: 'none'
   }
}));

function ElevationScroll(props: Props) {
   const { children, window } = props;
   // Note that you normally won't need to set the window ref as useScrollTrigger
   // will default to window.
   // This is only being set here because the demo is in an iframe.
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined
   });

   return cloneElement(children, {
      sx: {
         background: trigger ? '#fff' : 'none'
      }
   });
}

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
