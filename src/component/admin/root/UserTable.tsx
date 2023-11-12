import React, { memo } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { useAppSelector } from '../../../store/hooks';
import { adminUsersSelector } from '../../../store/helpers/admin-users';
import { ERole } from '../../../types/role';

import UserRole from './UserRole';

const UserTable = memo(() => {
   const { users } = useAppSelector(adminUsersSelector);

   return (
      <TableContainer component={Paper}>
         <Typography variant="h5" component="h1" pl={1}>
            Users
         </Typography>
         <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
               <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align="right">currentRole</TableCell>
                  <TableCell align="right">role</TableCell>
                  <TableCell align="right">Add role</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {users.map((row, i) => (
                  <TableRow key={row.id}>
                     <TableCell component="th" scope="row">
                        {i}
                     </TableCell>
                     <TableCell component="th" scope="row">
                        {row.id}
                     </TableCell>

                     <TableCell align="right">{row.currentRole}</TableCell>
                     <TableCell align="right">{row.role}</TableCell>
                     <TableCell align="right" width="20%">
                        <UserRole roles={row.role.split(',') as ERole[]} />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
});

export default UserTable;
