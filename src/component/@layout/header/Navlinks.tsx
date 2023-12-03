import { Box, styled } from '@mui/material';
import React, { FC } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/router';
import LogoutIcon from '@mui/icons-material/Logout';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ERole } from '../../../types/role';
import { authSelector } from '../../../store/helpers/auth';
import UserAvatar from '../../UI/avatar';
import { logOutAuthThunk } from '../../../store/slices/authentication-slice';
import CircularLoading from '../../loading';

import Links from './Links';
import MainLinks from './MainLinks';
import RoleSelect from './RoleSelect';

const StyledNavlinks = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '10px'
}));

const Navlinks: FC = () => {
   const { fields, loading } = useAppSelector(authSelector);
   const { push } = useRouter();
   const dispatch = useAppDispatch();

   const role: ERole = fields.currentRole;

   const settings = [
      {
         id: 1,
         text: 'Main',
         icon: <HomeIcon />,
         settingFunction: () => {
            if (role === 'USER') {
               push('/');
            } else {
               push('/admin');
            }
         }
      },
      { id: 2, text: 'Log out', icon: <LogoutIcon />, settingFunction: () => dispatch(logOutAuthThunk()) }
   ];

   return (
      <StyledNavlinks>
         {loading && <CircularLoading open />}

         {role !== '' ? <Links role={role} /> : <MainLinks />}

         <RoleSelect fields={fields} />

         {fields.email && (
            <UserAvatar
               alt={fields.displayName || ''}
               url={fields.photoURL || ''}
               email={fields.email || ''}
               settings={settings}
            />
         )}
      </StyledNavlinks>
   );
};

export default Navlinks;
