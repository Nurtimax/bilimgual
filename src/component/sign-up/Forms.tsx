import { Button, TextField, styled } from '@mui/material';
import React from 'react';

const StyledForms = styled('form')`
   display: grid;
   gap: 20px;
`;

const Forms = () => {
   return (
      <StyledForms>
         <TextField fullWidth label="First name" />
         <TextField fullWidth label="Last name" />
         <TextField fullWidth label="Email" />
         <TextField fullWidth label="Password" />

         <Button variant="login" fullWidth>
            SIGN UP
         </Button>
      </StyledForms>
   );
};

export default Forms;
