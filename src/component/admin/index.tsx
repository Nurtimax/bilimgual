import { Box } from '@mui/material';
import React, { useEffect } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { getAdminUsersThunk } from '../../store/slices/admin-users';

import UserTable from './root/UserTable';

const MainAdmin = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getAdminUsersThunk());
   }, [dispatch]);

   return (
      <Box>
         <UserTable />
      </Box>
   );
};

export default MainAdmin;
