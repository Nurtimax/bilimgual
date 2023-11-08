import { Box, styled } from '@mui/material';
import React, { FC } from 'react';

import { useAppSelector } from '../../store/hooks';
import { authSelector } from '../../store/slices/authentication-slice';
import { ERole } from '../../types/role';

import Links from './Links';
import MainLinks from './MainLinks';

const StyledNavlinks = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '60px'
}));

const Navlinks: FC = () => {
   const { fields } = useAppSelector((state) => authSelector(state));
   console.log(fields);

   const role: ERole = fields.emailVerified ? 'USER' : '';

   return <StyledNavlinks>{role !== '' ? <Links role={role} /> : <MainLinks />}</StyledNavlinks>;
};

export default Navlinks;
