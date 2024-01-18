import { Card, CardHeader, CardMedia, Rating } from '@mui/material';
import React, { FC } from 'react';
import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';

const Slide: FC<StackedCarouselSlideProps> = (StackedCarouselSlideProps) => {
   const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = StackedCarouselSlideProps;

   const photoURL = data[dataIndex].photoURL;
   const description = data[dataIndex].description;
   const name = data[dataIndex].name;
   const rating = data[dataIndex].rating;

   return (
      <Card
         elevation={0}
         sx={{
            borderRadius: '40px',
            p: '3.5rem',
            background: '#E5E5E5',
            display: 'grid !important',
            height: '80%'
         }}
         onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
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
               sx: { fontSize: '16px !important', color: '#23212A', fontWeight: 400, lineHeight: 1.5 }
            }}
            subheader={String(name)}
            subheaderTypographyProps={{
               sx: {
                  fontSize: '16px !important',
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
   );
};

export default Slide;
