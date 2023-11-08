import { Button, TextField, styled } from '@mui/material';
import React from 'react';

const StyledForms = styled('form')``;

const Forms = () => {
   return (
      <StyledForms>
         <TextField fullWidth label="First name" />
         <TextField fullWidth label="Last name" sx={{ mt: 1.5 }} />
         <TextField fullWidth label="Email" sx={{ mt: 1.5 }} />
         <TextField fullWidth label="Password" sx={{ mt: 1.5 }} />

         <Button variant="login" fullWidth sx={{ mt: 1.5 }}>
            SIGN UP
         </Button>
      </StyledForms>
   );
};

export default Forms;
