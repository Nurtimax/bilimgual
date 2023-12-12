import React from 'react';
import { Button, FormLabel, Stack, TextField } from '@mui/material';

import Card from '../../UI/card';

const MainAdminTestAdd = () => {
   return (
      <Card
         cardProps={{ sx: { width: '80%', margin: '0 auto', px: '80px', py: '50px', borderRadius: '20px' } }}
         contentProps={{
            sx: {
               display: 'grid',
               gap: '24px'
            },
            children: (
               <>
                  <Stack gap={1}>
                     <FormLabel sx={{ color: '#4B4759' }}>Title</FormLabel>
                     <TextField fullWidth id="" name="" onAbort={() => {}} value={''} error={false} helperText="" />
                  </Stack>
                  <Stack gap={1}>
                     <FormLabel sx={{ color: '#4B4759' }}>Short Description</FormLabel>
                     <TextField fullWidth id="" name="" onAbort={() => {}} value={''} error={false} helperText="" />
                  </Stack>
               </>
            )
         }}
         actionProps={{
            children: (
               <Stack direction="row" gap={2} justifyContent="flex-end" width="100%">
                  <Button variant="login">GO BACK</Button>
                  <Button variant="contained" color="success">
                     SAVE
                  </Button>
               </Stack>
            )
         }}
      />
   );
};

export default MainAdminTestAdd;
