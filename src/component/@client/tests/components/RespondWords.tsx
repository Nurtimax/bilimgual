import { Stack, TextField, Typography } from '@mui/material';
import React, { FC, memo, useState } from 'react';

interface IRespondWordsProps {
   title?: string;
}

const RespondWords: FC<IRespondWordsProps> = memo(() => {
   const [value, setValue] = useState('');

   return (
      <Stack display="grid" gridTemplateColumns="1fr 1fr" alignItems="center">
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
      </Stack>
   );
});

export default RespondWords;
