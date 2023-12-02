import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

import ElevationScroll from './elevation-scroll';
import MainHeader from './header/MainHeader';

interface IMainLayoutProps {
   children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
   const { pathname } = useRouter();

   return (
      <>
         {pathname === '/' ? (
            <ElevationScroll>
               <MainHeader />
            </ElevationScroll>
         ) : (
            <MainHeader sx={{ background: '#fff' }} />
         )}

         <>{children}</>
      </>
   );
};

export default MainLayout;
