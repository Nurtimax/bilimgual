import { CardContent, CardHeader, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const RespondWords = () => {
   const [value, setValue] = useState('');

   return (
      <>
         <CardHeader
            title="Respond to the question in at least 50 words"
            titleTypographyProps={{ textAlign: 'center' }}
         />

         <CardContent sx={{ p: 3, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 5 }}>
            <Typography>"{'Describe a time you were surpised. what happened?'}"</Typography>
            <Stack>
               <TextField
                  rows={10}
                  multiline
                  placeholder="Your response"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <Typography variant="body2" color="blue">
                  {value.length} words
               </Typography>
            </Stack>
         </CardContent>
      </>
   );
};

export default RespondWords;
