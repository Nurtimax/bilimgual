import { CardContent, CardHeader, Grid, IconButton, Paper, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import CheckIcon from '@mui/icons-material/Check';
import { useSpeechSynthesis } from 'react-speech-kit';

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   paddingLeft: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
   display: 'flex',
   alignItems: 'center',
   border: '1.5px solid',
   justifySelf: 'baseline',
   borderRadius: theme.spacing(1),
   justifyContent: 'space-between'
}));

const ListenAndSelect = () => {
   const { speak } = useSpeechSynthesis();

   const handleClickAndSpeak = (text: string) => {
      speak({ text });
   };

   return (
      <>
         <CardHeader
            title="Write on more sentences that describe the image"
            titleTypographyProps={{ textAlign: 'center' }}
         />

         <CardContent sx={{ p: 3 }}>
            <Grid container spacing={3}>
               {['Nurti', 'Perfect', 'Super'].map((text, i) => (
                  <Grid item key={i} xs={4}>
                     <Item>
                        <Stack direction="row" minWidth="10rem" alignItems="center" gap={1}>
                           <IconButton onClick={() => handleClickAndSpeak(text)}>
                              <VolumeUpIcon />
                           </IconButton>
                           <Typography variant="body2">WORD {i}</Typography>
                        </Stack>
                        <IconButton sx={{ borderLeft: '1.5px solid', p: 1, borderRadius: 0 }}>
                           <CheckIcon />
                        </IconButton>
                     </Item>
                  </Grid>
               ))}
            </Grid>
         </CardContent>
      </>
   );
};

export default ListenAndSelect;
