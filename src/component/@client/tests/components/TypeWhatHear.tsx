import { IconButton, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

import TypeWhatHearIcon from '../../../../assets/icons/TypeWhatHearIcon';

const ClientTypeWhatHear = () => {
   const { speak } = useSpeechSynthesis();

   const handleClickAndSpeak = () => {
      speak({ text: 'Type the statement you hear' });
   };
   return (
      <Stack gap={6.25} p={6.25} display="grid" gridTemplateRows="0.3fr 1fr" sx={{ placeItems: 'center' }}>
         <Typography sx={{ fontWeight: 400, fontSize: 24 }}>Type the statement you hear</Typography>
         <Stack direction="row" alignItems="center" gap={14.375}>
            <IconButton onClick={handleClickAndSpeak}>
               <TypeWhatHearIcon />
            </IconButton>
            <TextField
               multiline
               rows={5}
               sx={{ minWidth: '400px' }}
               placeholder=" Your response "
               helperText="number of replays left: 2"
               FormHelperTextProps={{ sx: { color: '#AFAFAF' } }}
            />
         </Stack>
      </Stack>
   );
};

export default ClientTypeWhatHear;
