import { Box, styled } from '@mui/material';
import { FC } from 'react';

import Links from './Links';
import MainLinks from './MainLinks';

interface NavlinksProps {
   role: string;
}

const StyledNavlinks = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '60px',
   width: '30%'
}));

const Navlinks: FC<NavlinksProps> = ({ role }) => {
   return <StyledNavlinks>{role !== '' ? <Links role={role} /> : <MainLinks />}</StyledNavlinks>;
};

export default Navlinks;
