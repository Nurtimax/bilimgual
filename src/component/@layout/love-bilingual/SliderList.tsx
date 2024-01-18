import { Box, IconButton, styled } from '@mui/material';
import React, { FC, useRef } from 'react';
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { ISliderList } from '../../../layout/love-bilingual';

import Slide from './Slide';

interface ISliderListProps {
   sliders: ISliderList[];
}

const SliderStyle = styled('div')`
   padding-top: 3rem;
   position: relative;
   display: flex;
   align-items: center;

   .react-stacked-center-carousel {
      padding: 20px 0;
   }

   .react-stacked-center-carousel-slide-0 > div {
      cursor: default;
      background: #666ca7;
      & .MuiCardHeader-root > div > span {
         color: #fff;
      }
   }

   .card-card:hover .card-overlay {
      background-color: #0000002d;
   }

   .react-stacked-center-carousel-slide-0 .card-overlay {
      background-color: #00000099 !important;
   }

   .react-stacked-center-carousel-slide-0 .card-card .cover {
      transition: opacity 300ms ease, z-index 0ms 300ms;
   }
`;

const SliderList: FC<ISliderListProps> = ({ sliders }) => {
   const ref = useRef<StackedCarousel>();

   return (
      <SliderStyle>
         <Box
            sx={{
               position: 'absolute',
               left: 0,
               zIndex: 10,
               height: '100%',
               width: '180px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
            }}
         >
            <IconButton onClick={() => ref.current?.goBack()} sx={{}}>
               <KeyboardBackspaceIcon />
            </IconButton>
         </Box>
         <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
               return (
                  <StackedCarousel
                     ref={carouselRef}
                     slideComponent={Slide}
                     slideWidth={width / 3}
                     height={750}
                     carouselWidth={width}
                     data={sliders}
                     maxVisibleSlide={5}
                     disableSwipe
                     customScales={[1, 0.85, 0.7, 0.55]}
                     transitionTime={500}
                     currentVisibleSlide={3}
                  />
               );
            }}
         />

         <Box
            sx={{
               position: 'absolute',
               right: 0,
               zIndex: 10,
               height: '100%',
               width: '180px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
            }}
         >
            <IconButton onClick={() => ref.current?.goNext()} sx={{ rotate: '180deg' }}>
               <KeyboardBackspaceIcon />
            </IconButton>
         </Box>
      </SliderStyle>
   );
};

export default SliderList;
