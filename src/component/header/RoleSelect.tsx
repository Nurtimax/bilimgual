import React, { useState } from 'react';
import { Autocomplete, Box, MenuItem, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authSelector } from '../../store/helpers/auth';
import { firestore } from '../../firebase';
import { IUserRole } from '../../types/auth';
import { actionAuthentication } from '../../store/slices/authentication-slice';
import CircularLoading from '../loading';

const RoleSelect = () => {
   const { fields } = useAppSelector((state) => authSelector(state));
   const { replace } = useRouter();
   const dispatch = useAppDispatch();
   const [loading, setLoading] = useState(false);

   const roleValue = fields.role.split(',') || [''];

   if (roleValue.length < 1) {
      return null;
   }

   const handleChange = async (_: unknown, newValue: string | null) => {
      setLoading(true);
      const docRef = doc(firestore, 'users', `${fields.email}`);

      const docSnap = await getDoc(docRef);

      const data = docSnap.data() as IUserRole;

      const docData = { ...data, currentRole: newValue };

      await setDoc(doc(firestore, 'users', `${fields.email}`), docData);

      const docSnapAgain = await getDoc(docRef);

      const dataAgain = docSnapAgain.data() as IUserRole;

      dispatch(actionAuthentication.authUserRolesSave(dataAgain));
      setLoading(true);
      if (newValue === 'ADMIN') {
         return replace('/admin');
      }

      return replace('/');
   };

   return (
      <Box sx={{ minWidth: 150 }}>
         {loading && <CircularLoading open />}

         <Autocomplete
            options={roleValue}
            value={fields.currentRole}
            onChange={handleChange}
            ListboxProps={{
               sx: { background: 'white', color: 'black', fontWeight: '900', fontFamily: 'Gudea' }
            }}
            renderOption={(props, option) => (
               <MenuItem {...props} sx={{ fontWeight: '900', fontFamily: 'Gudea' }}>
                  {option}
               </MenuItem>
            )}
            sx={{
               '& .MuiInputBase-input': { fontWeight: '900', fontFamily: 'Gudea', color: '#4C4859', fontSize: '14px' },
               '& .MuiFormLabel-root': { fontWeight: '900', fontFamily: 'Gudea', color: '#4C4859', fontSize: '14px' }
            }}
            renderInput={(props) => <TextField label="ROLE" {...props} />}
            popupIcon={<ArrowDropDownIcon sx={{ color: '#4C4859' }} />}
         />
      </Box>
   );
};

export default RoleSelect;
