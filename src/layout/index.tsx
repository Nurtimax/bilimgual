import { styled } from '@mui/material'
import { FC, ReactNode } from 'react'
import MainHeader from './header/MainHeader'

interface IMainLayoutProps {
   children: ReactNode
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
   return (
      <>
         <MainHeader />
         <StyledMainContent>{children}</StyledMainContent>
         <footer>My Website Footer</footer>
      </>
   )
}

export default MainLayout

const StyledMainContent = styled('main')(() => ({
   padding: '80px 0 0',
}))
