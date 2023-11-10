import { styled } from '@mui/material';
import React, { FC, ReactNode } from 'react';

import BilingualBox from './boxes/BilingualBox';

interface IMainLayoutProps {
   children: ReactNode;
}

const StyledMainContent = styled('main')(() => ({
   padding: '127px 0'
}));

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
   return (
      <>
         <BilingualBox />
         <StyledMainContent>{children}</StyledMainContent>
      </>
   );
};

export default MainLayout;
