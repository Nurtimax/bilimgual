import { Box, IconButton, styled } from '@mui/material';
import React, { ReactNode, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import SliderCard from '../UI/slide-card';

const RootStyle = styled(Box)`
   padding-top: 3rem;

   & .slick-slide {
      float: right;
   }

   & .slick-slider {
      display: grid;
      gap: 2rem;
   }

   & .slick-dots {
      position: static;
   }

   & .slick-dots li {
      width: inherit;
      border-radius: 20px;
      height: 10px;
      transition: height 200ms;
      margin-bottom: 0.5rem;

      &.slick-active {
         background-color: red;
         height: 20px;
      }
   }
`;

const SliderList = () => {
   const sliderRef = useRef<Slider | null>();

   const settings: Settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1.2,
      slidesToScroll: 1,
      appendDots: (dots: ReactNode) => (
         <div
            style={{
               borderRadius: '10px',
               padding: '10px',
               paddingTop: '1rem'
            }}
         >
            <ul style={{ margin: '0px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
               <IconButton
                  onClick={() => {
                     if (sliderRef.current) {
                        sliderRef.current?.slickPrev();
                     }
                  }}
                  sx={{ mr: 3 }}
               >
                  <KeyboardBackspaceIcon />
               </IconButton>

               {dots}

               <IconButton
                  onClick={() => {
                     if (sliderRef.current) {
                        sliderRef.current?.slickNext();
                     }
                  }}
                  sx={{ rotate: '180deg', ml: 3 }}
               >
                  <KeyboardBackspaceIcon />
               </IconButton>
            </ul>
         </div>
      ),
      customPaging: () => (
         <div
            style={{
               width: '5px',

               color: 'blue'
            }}
         ></div>
      )
   };

   return (
      <RootStyle>
         <Slider ref={sliderRef as React.RefObject<Slider>} {...settings}>
            <SliderCard />
            <SliderCard />
            <SliderCard />
            <SliderCard />
         </Slider>
      </RootStyle>
   );
};

export default SliderList;
