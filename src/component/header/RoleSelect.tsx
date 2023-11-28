import React, { FC, useState } from 'react';
import { Autocomplete, Box, MenuItem, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { useAppDispatch } from '../../store/hooks';
import { firestore } from '../../firebase';
import { IReduxAuthInitialStateFields, IUserRole } from '../../types/auth';
import { actionAuthentication } from '../../store/slices/authentication-slice';
import CircularLoading from '../loading';

interface IRoleSelectProps {
   fields: IReduxAuthInitialStateFields;
}

const RoleSelect: FC<IRoleSelectProps> = ({ fields }) => {
   const { replace } = useRouter();
   const dispatch = useAppDispatch();
   const [loading, setLoading] = useState(false);

   const handleChange = async (_: unknown, newValue: string | null) => {
      if (!fields.email) {
         return;
      }

      setLoading(true);

      const docRef = doc(firestore, 'users', `${fields.email}`);

      const docSnap = await getDoc(docRef);

      const data = docSnap.data() as IUserRole;

      const docData = { ...data, currentRole: newValue || 'USER' };

      await setDoc(doc(firestore, 'users', `${fields.email}`), docData);

      const docSnapAgain = await getDoc(docRef);

      const dataAgain = docSnapAgain.data() as IUserRole;

      dispatch(actionAuthentication.authUserRolesSave(dataAgain));

      setLoading(false);
      if (newValue === 'ADMIN') {
         return replace('/admin');
      }

      return replace('/');
   };

   const roleValue = fields.role?.split(',');

   if (roleValue.length <= 1) {
      return null;
   }

   return (
      <Box sx={{ minWidth: 150 }}>
         {loading && <CircularLoading open />}

         <Autocomplete
            options={roleValue || []}
            value={fields.currentRole}
            onChange={handleChange}
            renderOption={(props, option) => (
               <MenuItem {...props} sx={{ fontWeight: '900', fontFamily: 'Gudea' }}>
                  {option}
               </MenuItem>
            )}
            renderInput={(props) => <TextField label="ROLE" {...props} />}
            popupIcon={<ArrowDropDownIcon sx={{ color: '#4C4859' }} />}
         />
      </Box>
   );
};

export default RoleSelect;
