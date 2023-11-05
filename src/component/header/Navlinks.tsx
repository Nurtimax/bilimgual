import { Box, styled } from '@mui/material';
import React, { FC } from 'react';

import { ERole } from '../../types/role';

import Links from './Links';
import MainLinks from './MainLinks';

interface NavlinksProps {
   role: ERole;
}

const StyledNavlinks = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '60px'
}));

const Navlinks: FC<NavlinksProps> = ({ role }) => {
   return <StyledNavlinks>{role !== '' ? <Links role={role} /> : <MainLinks />}</StyledNavlinks>;
};

export default Navlinks;
