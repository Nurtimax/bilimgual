import { Container, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUsefullVideoCardsThunk, selectorUsefull } from '../../store/slices/usefull';
import CircularLoading from '../loading';

import VideoCard from './VideoCard';

const UseFullVideos = () => {
   const dispatch = useAppDispatch();

   const { cards, loading } = useAppSelector(selectorUsefull);

   useEffect(() => {
      dispatch(getUsefullVideoCardsThunk());

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch]);

   if (loading) {
      return <CircularLoading open />;
   }

   return (
      <Container>
         <Stack py={8}>
            <Typography textAlign="center" variant="h4" color="#3752B4">
               Useful Videos
            </Typography>

            <Grid container minHeight={350} spacing={8} pt={5}>
               {cards.map((card) => (
                  <Grid item xs={4} key={card.id}>
                     <VideoCard {...card} />
                  </Grid>
               ))}
            </Grid>
         </Stack>
      </Container>
   );
};

export default UseFullVideos;
