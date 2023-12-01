import { Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import VideoCard from './VideoCard';

const UseFullVideos = () => {
   return (
      <Container>
         <Stack pt={8}>
            <Typography textAlign="center" variant="h4" color="#3752B4">
               Useful Videos
            </Typography>

            <Grid container minHeight={350} spacing={8} pt={5}>
               <Grid item xs={4}>
                  <VideoCard />
               </Grid>
               <Grid item xs={4}>
                  <VideoCard />
               </Grid>
               <Grid item xs={4}>
                  <VideoCard />
               </Grid>
            </Grid>
         </Stack>
      </Container>
   );
};

export default UseFullVideos;
