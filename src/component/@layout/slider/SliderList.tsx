import { Box, styled } from '@mui/material';
import React, { FC, memo, useRef } from 'react';
import Slider from 'react-slick';

import SliderCard from '../../UI/slide-card';
import { ISlidersInitialStateData } from '../../../store/slices/sliders';
import { sliderSettings } from '../../UI/slider';

interface ISliderListProps {
   sliders?: ISlidersInitialStateData[];
}

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
         background-color: ${({ theme }) => theme.palette.primary.main};
         height: 20px;
      }
   }
`;

const SliderList: FC<ISliderListProps> = memo(({ sliders }) => {
   const sliderRef = useRef<Slider | null>();

   const settings = sliderSettings({ sliderRef: sliderRef });

   return (
      <RootStyle>
         <Slider ref={sliderRef as React.RefObject<Slider>} {...settings}>
            {sliders?.map((slide) => (
               <SliderCard key={slide.id} {...slide} />
            ))}
         </Slider>
      </RootStyle>
   );
});

export default SliderList;
