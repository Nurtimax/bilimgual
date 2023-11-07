import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import React from 'react';

const Forms = () => {
   return (
      <Box>
         <TextField fullWidth />
         <TextField fullWidth />
         <FormGroup>
            <FormControlLabel required control={<Checkbox />} label="Required" />
         </FormGroup>
         <Button variant="login">SIGN IN</Button>
      </Box>
   );
};

export default Forms;
