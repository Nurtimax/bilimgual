import React, { memo, useCallback, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { adminUsersSelector } from '../../../store/helpers/admin-users';
import { ERole } from '../../../types/role';
import { firestore } from '../../../firebase';
import { IUserRole } from '../../../types/auth';
import CircularLoading from '../../loading';
import { getAdminUsersThunk } from '../../../store/slices/admin-users';

import UserRole from './UserRole';

const roleConcat = (string: ERole, value: ERole): string => {
   const splitString = string.split(',');
   if (string.includes(value)) {
      const filtered = splitString.filter((split) => split !== value).join(',');
      return filtered;
   }
   splitString.push(value);
   return splitString.join(',');
};

const UserTable = memo(() => {
   const { users } = useAppSelector(adminUsersSelector);
   const [loading, setLoading] = useState(false);

   const dispatch = useAppDispatch();

   const handleChangeRole = useCallback(
      async (role: ERole, email: string) => {
         if (!email) {
            return toast.warning('You are not authenticated');
         }

         setLoading(true);

         const docRef = doc(firestore, 'users', `${email}`);

         try {
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
               // Handle the case when the document doesn't exist
               setLoading(false);
               return toast.error('User not found');
            }

            const data = docSnap.data() as IUserRole;

            // Update the role property without spreading it again
            const docData = {
               ...data,
               role: roleConcat('USER', role)
            };

            console.log(docData);

            await setDoc(doc(firestore, 'users', String(email)), docData);

            dispatch(getAdminUsersThunk());

            setLoading(false);
         } catch (error) {
            setLoading(false);
            toast.error('Error updating role');
         }
      },
      [dispatch]
   );

   if (loading) {
      return <CircularLoading open />;
   }

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
                        <UserRole
                           email={row.id}
                           roles={row.role.split(',') as ERole[]}
                           roleHandler={handleChangeRole}
                        />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
});

export default UserTable;
