import { Box, styled } from '@mui/material';
import React, { FC } from 'react';

import Navlinks from './Navlinks';
import LogoWrapper from './LogoWrapper';

const StyledHeaderWrapper = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '1rem 0',
   '& .logo': {
      [theme.breakpoints.up('md')]: {
         width: '174px',
         height: '42px'
      },
      [theme.breakpoints.between('sm', 'md')]: {
         width: '140px',
         height: '35px'
      },
      [theme.breakpoints.down('sm')]: {
         width: '140px',
         height: '35px'
      }
   }
}));

const HeaderWrapper: FC = () => {
   return (
      <StyledHeaderWrapper>
         <LogoWrapper />
         <Navlinks />
      </StyledHeaderWrapper>
   );
};

export default HeaderWrapper;
