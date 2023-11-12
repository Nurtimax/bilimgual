'use client';
import { Box, Grid, GridProps, styled } from '@mui/material';
import { useRouter } from 'next-router-mock';
import React, { FC, ReactNode, useMemo } from 'react';

interface LinkItemProps extends GridProps {
   children: ReactNode;
   to: string;
}

const StyledLink = styled(Box)(({ theme }) => ({
   fontFamily: 'Gudea',
   fontSize: '15px',
   fontWeight: '900',

   textTransform: 'uppercase',

   color: '#4C4859',

   cursor: 'pointer',

   '&.active': {
      color: theme.palette.primary.main
   }
}));

const LinkItem: FC<LinkItemProps> = ({ children, to, ...props }) => {
   const { pathname, replace } = useRouter();

   const isActive = useMemo(() => {
      return pathname.split('').includes(to);
   }, [to, pathname]);

   const replaceHandler = () => {
      replace(to);
   };

   return (
      <Grid item {...props}>
         <StyledLink onClick={replaceHandler} className={isActive ? 'active' : ''}>
            {children}
         </StyledLink>
      </Grid>
   );
};

export default LinkItem;
