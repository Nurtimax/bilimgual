import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import { getSlidersDataThunk, selectorSliders } from '../../store/slices/sliders';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import SliderList from './SliderList';

const LayoutSlider = () => {
   const { data } = useAppSelector(selectorSliders);

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getSlidersDataThunk());
   }, [dispatch]);

   if (!data.length) {
      return 'No Data';
   }

   return (
      <Container>
         <Box pt={5}>
            <Typography variant="h4" sx={{ color: '#3752B4', textAlign: 'center' }}>
               Check out each question type
            </Typography>

            <SliderList sliders={data} />
         </Box>
      </Container>
   );
};

export default LayoutSlider;
