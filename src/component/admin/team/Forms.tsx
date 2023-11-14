import { Button, Card, CardActions, CardContent, TextField } from '@mui/material';
import React, { memo } from 'react';

const Forms = memo(() => {
   return (
      <Card>
         <CardContent sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
            <TextField fullWidth label="Full Name" required />
            <TextField fullWidth label="Email Address" required />
            <TextField fullWidth label="Phone Number" />
            <TextField fullWidth label="Country" required />
            <TextField fullWidth label="State/Region" />
            <TextField fullWidth label="City" required />
            <TextField fullWidth label="Address" />
            <TextField fullWidth label="Zip/Code" />
            <TextField fullWidth label="Company" required />
            <TextField fullWidth label="Role" required />
            <TextField fullWidth label="Github" required />
            <TextField fullWidth label="Telegram" />
            <TextField fullWidth label="Instagram" />
            <TextField fullWidth label="LinkedIn" />
            <TextField fullWidth label="Portfolio" />
            <TextField fullWidth label="Youtube" />
            <TextField fullWidth label="Facebook" />
         </CardContent>
         <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="contained">Create User</Button>
         </CardActions>
      </Card>
   );
});

export default Forms;
