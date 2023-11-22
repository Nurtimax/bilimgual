import { Grid } from '@mui/material';
import React, { useEffect } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { getAdminUsersThunk } from '../../store/slices/admin-users';

import UserTable from './root/UserTable';
import AdminNavigateActions from './actions';
import UserChart from './root/UserChart';
import UserGraphChart from './root/UserGraphChart';

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
         <Grid item xs={8}>
            <UserTable />
         </Grid>
         <Grid item xs={4} display="flex" flexDirection="column" gap={3}>
            <UserChart />
            <UserGraphChart />
         </Grid>
      </Grid>
   );
};

export default MainAdmin;
