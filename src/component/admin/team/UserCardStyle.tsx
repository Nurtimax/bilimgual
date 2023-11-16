import { Card, CardContent, TextField } from '@mui/material';
import React from 'react';

const UserCardStyle = () => {
   return (
      <Card>
         <CardContent sx={{ display: 'grid', gap: 2 }}>
            <TextField fullWidth />
            <TextField fullWidth />
            <TextField fullWidth />
         </CardContent>
      </Card>
   );
};

export default UserCardStyle;
