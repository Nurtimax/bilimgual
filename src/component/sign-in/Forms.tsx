import { Button, Checkbox, FormControlLabel, FormGroup, TextField, styled } from '@mui/material';
import React from 'react';

const StyledForms = styled('form')``;

const Forms = () => {
   return (
      <StyledForms>
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
      </StyledForms>
   );
};

export default Forms;
