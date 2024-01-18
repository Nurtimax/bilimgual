import { Box, Card, CardMedia, Container, Typography, styled } from '@mui/material';
import React, { useRef } from 'react';
import Slider from 'react-slick';

const RootStyle = styled('div')``;

const MainPartners = () => {
   const sliderRef = useRef<React.RefObject<Slider>>();

   const sliders = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      pauseOnHover: false
   };

   return (
      <RootStyle>
         <Container>
            <Typography variant="h3" textAlign="center" color="#3752B4" pb={7.5}>
               Partners
            </Typography>
         </Container>

         <Box m="auto" pb={15}>
            <Slider ref={sliderRef as unknown as React.RefObject<Slider>} {...settings}>
               {sliders.map((item) => (
                  <Card key={item.id} sx={{ width: '255px !important', height: '126px', p: 3 }}>
                     <CardMedia
                        image="/static/icons/logo_B.jpg"
                        sx={{ aspectRatio: '1000/450', backgroundSize: '100% 100%' }}
                     />
                  </Card>
               ))}
            </Slider>
         </Box>
      </RootStyle>
   );
};

export default MainPartners;
