import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import VoiceOverOffIcon from '@mui/icons-material/VoiceOverOff';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const RecordSaying = () => {
   const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

   const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-US' });

   if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
   }

   return (
      <Grid container spacing={5}>
         <Grid item xs={6} justifyContent="flex-end" display="flex" alignItems="center">
            {listening ? (
               <IconButton onClick={SpeechRecognition.stopListening} size="large" sx={{ p: 5 }}>
                  <RecordVoiceOverIcon sx={{ width: '100%', height: '100%', aspectRatio: '1/1' }} />
               </IconButton>
            ) : (
               <IconButton onClick={startListening} size="large" sx={{ p: 5 }}>
                  <VoiceOverOffIcon sx={{ width: '100%', height: '100%', aspectRatio: '1/1' }} />
               </IconButton>
            )}
         </Grid>
         <Grid item xs={6} display="flex" alignItems="center">
            <Typography variant="body2">"{transcript}".</Typography>
         </Grid>
      </Grid>
   );
};

export default RecordSaying;
