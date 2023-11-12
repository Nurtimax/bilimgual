import { Autocomplete, Checkbox, ListItemText, MenuItem, TextField } from '@mui/material';
import React, { FC, memo } from 'react';

import { ERole } from '../../../types/role';

interface IUserRole {
   roles: ERole[];
   roleHandler: (role: ERole, email: string) => void;
   email: string;
}

const defaultRoles: ERole[] = ['ADMIN', 'USER'];

const checkedValue = (role: ERole, array: ERole[]): boolean => {
   return array.includes(role);
};

const UserRole: FC<IUserRole> = memo(({ roles, roleHandler, email }) => {
   console.log(roles);

   return (
      <Autocomplete
         options={defaultRoles}
         renderOption={(props, option) => (
            <MenuItem {...props} divider value={option}>
               <Checkbox checked={checkedValue(option, roles)} />
               <ListItemText
                  inset
                  primary={option}
                  primaryTypographyProps={{ sx: { fontSize: '14px', fontWeight: '900', fontFamily: 'Gudea', p: 0 } }}
               />
            </MenuItem>
         )}
         onChange={(_, newValue) => {
            if (newValue) {
               roleHandler(newValue, email);
            }
         }}
         renderInput={(props) => <TextField {...props} />}
      />
   );
});

export default UserRole;
