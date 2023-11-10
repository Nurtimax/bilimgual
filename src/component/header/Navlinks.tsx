import { Box, styled } from '@mui/material';
import React, { FC } from 'react';

import { useAppSelector } from '../../store/hooks';
import { ERole } from '../../types/role';
import { authSelector } from '../../store/helpers/auth';

import Links from './Links';
import MainLinks from './MainLinks';
import RoleSelect from './RoleSelect';

const StyledNavlinks = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '10px'
}));

const Navlinks: FC = () => {
   const { fields } = useAppSelector((state) => authSelector(state));

   const role: ERole = fields.role;

   return (
      <StyledNavlinks>
         {role !== '' ? <Links role={role} /> : <MainLinks />}
         <RoleSelect />
      </StyledNavlinks>
   );
};

export default Navlinks;
