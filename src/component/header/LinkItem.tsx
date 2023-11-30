'use client';
import { Grid, GridProps, styled } from '@mui/material';
import { useRouter } from 'next-router-mock';
import Link from 'next/link';
import React, { FC, ReactNode, memo, useMemo } from 'react';

interface LinkItemProps extends GridProps {
   children: ReactNode;
   to: string;
}

const StyledLink = styled(Link)(({ theme }) => ({
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

const LinkItem: FC<LinkItemProps> = memo(({ children, to, ...props }) => {
   const { pathname } = useRouter();

   const isActive = useMemo(() => {
      return pathname.split('').includes(to);
   }, [to, pathname]);

   return (
      <Grid item {...props}>
         <StyledLink href={to} className={isActive ? 'active' : ''}>
            {children}
         </StyledLink>
      </Grid>
   );
});

export default LinkItem;
