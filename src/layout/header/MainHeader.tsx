import { AppBar, Container, styled, AppBarProps } from '@mui/material';
import { FC, memo, ReactNode, useEffect, useState } from 'react';

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

const StyledMainHeader: FC<StyledAppBarProps> = styled(AppBar)(() => ({
   transition: 'background .5s',
   background: '#FFFFFF',
   boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.03)',
   '&.background__none': {
      boxShadow: 'none',
      background: 'none'
   }
}));

const MainHeader: FC<MainHeaderProps> = memo(() => {
   const [isFixed, setIsFixed] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.pageYOffset > 0) {
            setIsFixed(true);
         } else {
            setIsFixed(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <StyledMainHeader position={!isFixed ? 'relative' : 'fixed'} className={!isFixed ? 'background__none' : ''}>
         <Container>
            <HeaderWrapper />
         </Container>
      </StyledMainHeader>
   );
});

export default MainHeader;
