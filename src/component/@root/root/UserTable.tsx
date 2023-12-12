import React, { memo, useCallback, useMemo, useState } from 'react';
import { Chip } from '@mui/material';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { adminUsersSelector } from '../../../store/helpers/admin-users';
import { ERole } from '../../../types/role';
import { firestore } from '../../../firebase';
import { IAdminUserCreatedAt, IUserRole } from '../../../types/auth';
import CircularLoading from '../../loading';
import { getAdminUsersThunk } from '../../../store/slices/admin-users';
import { getFormattedDate } from '../../../utils/helpers/date';
import CustomTable, { ITableHeaders, ITableRow } from '../../UI/table/CustomTable';

import UserRole from './UserRole';

const tableHeaders: ITableHeaders[] = [
   { label: '#', rowKey: 'id' },
   { label: 'Email', rowKey: 'email' },
   { label: 'Time Status', rowKey: 'timeStatus' },
   { label: 'currentRole', rowKey: 'currentRole', tableProps: {} },
   { label: 'role', rowKey: 'role', tableProps: {} }
];

const roleConcat = (string: ERole, value: ERole): string => {
   const splitString = string.split(',');
   if (string.includes(value)) {
      const filtered = splitString.filter((split) => split !== value).join(',');
      return filtered;
   }
   splitString.push(value);
   return splitString.join(',');
};

const dateLabel = (createdAt: IAdminUserCreatedAt | undefined) => {
   const date = createdAt?.seconds && getFormattedDate(createdAt?.seconds);

   const days = date && new Date(date).getDate() - new Date().getDate();

   const label = typeof days === 'number' ? (days > 10 ? `${days} days` : 'New') : 'No Date';

   return label;
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
               setLoading(false);
               return toast.error('User not found');
            }

            const data = docSnap.data() as IUserRole;

            const docData = {
               ...data,
               role: roleConcat(data.role, role)
            } as IUserRole;

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

   const tableRows: ITableRow[] = useMemo(
      () =>
         users.map((user, i) => ({
            id: i,
            email: user.id,
            timeStatus: <Chip label={dateLabel(user.createdAt)} />,
            currentRole: user.currentRole,
            role: (
               <UserRole
                  email={user.id}
                  roles={user.role.split(',') as ERole[]}
                  roleHandler={handleChangeRole}
                  currentRole={user.currentRole as ERole}
               />
            )
         })),
      [handleChangeRole, users]
   );

   return (
      <>
         {loading && <CircularLoading open />}

         <CustomTable tableHeaders={tableHeaders} tableRows={tableRows} />
      </>
   );
});

export default UserTable;
