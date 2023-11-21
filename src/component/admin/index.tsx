import { Grid } from '@mui/material';
import React, { useEffect } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { getAdminUsersThunk } from '../../store/slices/admin-users';

import UserTable from './root/UserTable';
import AdminNavigateActions from './actions';
import UserChart from './root/UserChart';

const MainAdmin = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getAdminUsersThunk());
   }, [dispatch]);

   return (
      <Grid container spacing={2} pb={5}>
         <Grid item xs={12}>
            <AdminNavigateActions />
         </Grid>
         <Grid item xs={9}>
            <UserTable />
         </Grid>
         <Grid item xs={3}>
            <UserChart />
         </Grid>
      </Grid>
   );
};

export default MainAdmin;
