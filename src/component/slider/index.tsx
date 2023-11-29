import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import SliderList from './SliderList';

const LayoutSlider = () => {
   return (
      <Container>
         <Box pt={5}>
            <Typography variant="h4" sx={{ color: '#3752B4', textAlign: 'center' }}>
               Check out each question type
            </Typography>

            <SliderList />
         </Box>
      </Container>
   );
};

export default LayoutSlider;
