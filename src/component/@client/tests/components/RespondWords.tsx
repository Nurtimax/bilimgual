import { Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import Card from '../../../UI/card';

const RespondWords = () => {
   const [value, setValue] = useState('');

   return (
      <>
         <Card
            headerProps={{
               title: 'Respond to the question in at least 50 words',
               titleTypographyProps: { textAlign: 'center' }
            }}
            contentProps={{
               children: (
                  <>
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
                  </>
               )
            }}
         />
      </>
   );
};

export default RespondWords;
