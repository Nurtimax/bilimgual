import { FC, ReactNode } from "react";
import MainHeader from "./header/MainHeader";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <footer>My Website Footer</footer>
    </>
  );
};

export default MainLayout;
