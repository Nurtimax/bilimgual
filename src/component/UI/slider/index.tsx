import { IconButton } from '@mui/material';
import React, { MutableRefObject, ReactNode } from 'react';
import Slider, { Settings } from 'react-slick';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

interface CarouselSettingsProps {
   sliderRef: MutableRefObject<Slider | null | undefined>; // Adjust the type of Ref based on what your sliderRef actually refers to
   settings?: Settings;
}

export const sliderSettings = ({ sliderRef, settings }: CarouselSettingsProps): Settings => ({
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
                  sliderRef?.current?.slickPrev();
               }}
               sx={{ mr: 3 }}
            >
               <KeyboardBackspaceIcon />
            </IconButton>

            {dots}

            <IconButton
               onClick={() => {
                  sliderRef?.current?.slickNext();
               }}
               sx={{ rotate: '180deg', ml: 3 }}
            >
               <KeyboardBackspaceIcon />
            </IconButton>
         </ul>
      </div>
   ),
   customPaging: () => (
      <div style={{ height: 'inherit', width: '5px' }}>
         <span
            style={{
               width: 'inherit',
               height: 'inherit',
               color: 'blue'
            }}
         />
      </div>
   ),
   ...settings
});
