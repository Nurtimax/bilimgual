import { Grid } from '@mui/material';
import React, { useEffect } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { getAdminUsersThunk } from '../../store/slices/admin-users';

import UserTable from './root/UserTable';
import AdminNavigateActions from './actions';

const MainAdmin = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getAdminUsersThunk());
   }, [dispatch]);

   return (
      <Grid container>
         <Grid item xs={12}>
            <AdminNavigateActions />
         </Grid>
         <Grid item xs={12}>
            <UserTable />
         </Grid>
      </Grid>
   );
};

export default MainAdmin;
