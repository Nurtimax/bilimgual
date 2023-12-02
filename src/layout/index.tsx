import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

import ElevationScroll from './elevation-scroll';
import MainHeader from './header/MainHeader';

interface IMainLayoutProps {
   children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
   const { pathname } = useRouter();

   const disabledPages = ['sign-in', 'sign-up'];

   return (
      <>
         {pathname === '/' ? (
            <ElevationScroll>
               <MainHeader />
            </ElevationScroll>
         ) : (
            <>{disabledPages.includes(pathname) || <MainHeader sx={{ background: '#fff' }} />}</>
         )}

         <>{children}</>
      </>
   );
};

export default MainLayout;
