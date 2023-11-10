import React from 'react';
import { Autocomplete, Box, MenuItem, TextField } from '@mui/material';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../store/hooks';
import { authSelector } from '../../store/helpers/auth';

const RoleSelect = () => {
   const { fields } = useAppSelector((state) => authSelector(state));
   const { replace } = useRouter();

   const [value, setValue] = React.useState<string | null>(null);

   const roleValue = fields.role.split(',') || [''];

   if (!roleValue.length) {
      return null;
   }

   const handleChange = (_: unknown, newValue: string | null) => {
      setValue(newValue);
      if (newValue === 'ADMIN') {
         replace('/admin');
      }
      replace('/');
   };

   return (
      <Box sx={{ minWidth: 150 }}>
         <Autocomplete
            options={roleValue}
            value={value}
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
         />
      </Box>
   );
};

export default RoleSelect;
