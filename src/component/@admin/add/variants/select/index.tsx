import React from 'react';
import {
   FormControl,
   FormHelperText,
   FormLabel,
   MenuItem,
   OutlinedInput,
   Select,
   SelectChangeEvent,
   Stack,
   TextField
} from '@mui/material';

import Card from '../../../../UI/card';

const MainAdminTestAddVariantsSelect = () => {
   const [age, setAge] = React.useState(10);

   const handleChange = (event: SelectChangeEvent) => {
      setAge(+event.target.value);
   };

   return (
      <Card
         cardProps={{ sx: { width: '80%', margin: '0 auto', borderRadius: '20px' } }}
         contentProps={{
            children: (
               <Stack>
                  <Stack gap={3} display="grid" gridTemplateColumns="7fr 1fr" alignItems="flex-end" py={2}>
                     <Stack gap={1}>
                        <FormLabel id="demo-simple-select-helper-label">Title</FormLabel>
                        <TextField />
                     </Stack>
                     <Stack gap={1}>
                        <FormLabel id="demo-simple-select-helper-label">Duration (in minutes)</FormLabel>
                        <TextField />
                     </Stack>
                  </Stack>
                  <Stack>
                     <FormControl sx={{ minWidth: 120 }}>
                        <FormLabel id="demo-simple-select-helper-label">Type</FormLabel>
                        <Select
                           labelId="demo-simple-select-helper-label"
                           id="demo-simple-select-helper"
                           value={String(age)}
                           inputProps={{}}
                           input={<OutlinedInput sx={{ border: '2px solid #bdbdbd' }} />}
                           onChange={handleChange}
                        >
                           <MenuItem value={10}>Select real English words</MenuItem>
                           <MenuItem value={20}>Listen and select word</MenuItem>
                           <MenuItem value={30}>Type what you hear</MenuItem>
                           <MenuItem value={30}>Record saying statement</MenuItem>
                           <MenuItem value={30}>Respond in at least N words</MenuItem>
                        </Select>
                        <FormHelperText>With label + helper text</FormHelperText>
                     </FormControl>
                  </Stack>
               </Stack>
            )
         }}
      />
   );
};

export default MainAdminTestAddVariantsSelect;
