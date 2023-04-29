import { styled } from '@mui/material';
import { FC, ReactNode } from 'react';
import BilingualBox from './boxes/BilingualBox';

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <>
      <BilingualBox />
      <StyledMainContent>{children}</StyledMainContent>
      <footer>My Website Footer</footer>
    </>
  );
};

export default MainLayout;

const StyledMainContent = styled('main')(() => ({
  padding: '127px 0',
}));
