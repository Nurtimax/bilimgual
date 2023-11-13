import { Autocomplete, Checkbox, ListItemText, MenuItem, TextField } from '@mui/material';
import React, { FC, memo } from 'react';

import { ERole } from '../../../types/role';

interface IUserRole {
   roles: ERole[];
   roleHandler: (role: ERole, email: string) => void;
   email: string;
   currentRole: ERole;
}

const defaultRoles: ERole[] = ['ADMIN', 'USER'];

const checkedValue = (role: ERole, array: ERole[]): boolean => {
   return array.includes(role);
};

const UserRole: FC<IUserRole> = memo(({ roles, roleHandler, email, currentRole }) => {
   return (
      <Autocomplete
         options={defaultRoles}
         value={currentRole}
         renderOption={(props, option) => (
            <MenuItem {...props} divider value={option}>
               <Checkbox checked={checkedValue(option, roles)} sx={{ height: 10, width: 10 }} />
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
         filterOptions={(options) => options}
         renderInput={(props) => <TextField {...props} size="small" />}
      />
   );
});

export default UserRole;
