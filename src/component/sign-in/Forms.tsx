import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import React from 'react';

const Forms = () => {
   return (
      <Box>
         <TextField fullWidth label="Email" />
         <TextField fullWidth label="Password" sx={{ mt: 1.5 }} />
         <FormGroup>
            <FormControlLabel
               required
               control={<Checkbox />}
               label="To remember me"
               componentsProps={{
                  typography: {
                     variant: 'body3'
                  }
               }}
            />
         </FormGroup>
         <Button variant="login" fullWidth>
            SIGN IN
         </Button>
      </Box>
   );
};

export default Forms;
