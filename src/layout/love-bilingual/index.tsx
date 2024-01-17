import { Box, Card, CardHeader, CardMedia, Container, Rating, Typography, styled } from '@mui/material';
import React, { useRef } from 'react';
import Slider from 'react-slick';

import { sliderSettings } from '../../component/UI/slider';

interface SliderList {
   photoURL?: string;
   description?: string;
   name?: string;
   rating?: number;
}

const RootStyle = styled('div')``;

const SliderStyle = styled(Box)`
   padding-top: 3rem;

   & .slick-slide {
      float: right;
      padding: 16px;
   }

   & .slick-slider {
      display: grid;
      gap: 2rem;
   }

   & .slick-dots {
      position: static;
   }
   & .slick-center > div > div {
      background-color: #666ca7;
      & .MuiCardHeader-root > div > span {
         color: #fff !important;
      }
   }

   & .slick-dots li {
      width: inherit;
      border-radius: 20px;
      height: 10px;
      transition: height 200ms;
      margin-bottom: 0.5rem;

      &.slick-active {
         background-color: ${({ theme }) => theme.palette.primary.main};
         height: 20px;
      }
   }
`;

const LoveBilingual = () => {
   const sliderRef = useRef<Slider | null>();

   const sliders: SliderList[] = [
      {
         photoURL: '/static/icons/logo_B.jpg',
         description:
            'Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.',
         name: '- Alina Begishova',
         rating: 5
      },
      {
         photoURL: '/static/icons/logo_B.jpg',
         description:
            'Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.',
         name: '- Alina Begishova',
         rating: 5
      },
      {
         photoURL: '/static/icons/logo_B.jpg',
         description:
            'Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.',
         name: '- Alina Begishova',
         rating: 5
      },
      {
         photoURL: '/static/icons/logo_B.jpg',
         description:
            'Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.',
         name: '- Alina Begishova',
         rating: 5
      }
   ];

   const settings = sliderSettings({
      sliderRef,
      settings: {
         slidesToShow: sliders.length < 3 ? sliders.length : 3,
         centerMode: true,
         centerPadding: '60px',
         className: 'center',
         slidesToScroll: 3
      }
   });

   return (
      <RootStyle>
         <Container>
            <Typography variant="h3" textAlign="center" color="#3752B4" pb={7.5}>
               Why people love Bilingual
            </Typography>
            <SliderStyle pb={15}>
               <Slider ref={sliderRef as React.RefObject<Slider>} {...settings}>
                  {sliders?.map(({ photoURL, description, name, rating }, i) => (
                     <Card
                        elevation={0}
                        sx={{
                           borderRadius: '40px',
                           p: '3.5rem',
                           background: '#E5E5E5',
                           display: 'grid !important',
                           height: '80%'
                        }}
                     >
                        <CardMedia
                           image={photoURL}
                           sx={{
                              backgroundSize: 'contain',
                              height: '260px',
                              width: '260px',
                              borderRadius: '50%',
                              justifySelf: 'center'
                           }}
                        />
                        <CardHeader
                           title={description}
                           titleTypographyProps={{
                              sx: { fontSize: 16, color: '#23212A', fontWeight: 400, lineHeight: 1.5 }
                           }}
                           subheader={String(name) + i}
                           subheaderTypographyProps={{
                              sx: {
                                 fontSize: 16,
                                 color: '#23212A',
                                 fontWeight: 600,
                                 lineHeight: 1.5,
                                 textAlign: 'center',
                                 pt: 2
                              }
                           }}
                        />
                        <Rating value={rating} readOnly sx={{ justifySelf: 'center' }} />
                     </Card>
                  ))}
               </Slider>
            </SliderStyle>
         </Container>
      </RootStyle>
   );
};

export default LoveBilingual;
