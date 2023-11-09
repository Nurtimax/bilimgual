import { Easing } from 'framer-motion';

import { IFlightVariantsArray } from '../types';

const ease: Easing | Easing[] = 'backOut';

function getRandomValue(min: number, max: number): number {
   return Math.random() * (max - min) + min;
}

// Generate 10 random Flight variantes
export const flights: IFlightVariantsArray[] = Array(5)
   .fill('')
   .map((_, index) => {
      const initialX = getRandomValue(90, 290); // Start from the left (negative values)
      const initialY = getRandomValue(80, -140); // Random initial vertical position
      const animateX = getRandomValue(50, 230); // Move to the right (positive values)
      const animateY = initialY - 30;

      return {
         variants: {
            initial: {
               x: initialX,
               y: initialY
            },
            animate: {
               x: animateX,
               y: animateY,
               transition: {
                  duration: getRandomValue(2, 4),
                  repeat: Infinity,
                  ease,
                  delay: getRandomValue(0.03, 0.1),
                  repeatType: 'mirror',
                  repeatDelay: getRandomValue(0.2, 0.4)
               }
            },
            style: {
               width: '20px',
               height: '20px'
            }
         },
         id: index + 10
      };
   });

export const flightVariantsArray: IFlightVariantsArray[] = [
   {
      variants: {
         initial: {
            x: 180,
            y: 50
         },
         animate: {
            x: 270,
            y: -150,
            transition: {
               duration: 3,
               repeat: Infinity,
               ease,
               delay: 0.06,
               repeatType: 'mirror',
               repeatDelay: 0.3
            }
         },
         style: {
            width: '20px',
            height: '20px'
         }
      },
      id: 1
   },
   {
      variants: {
         initial: {
            x: 200,
            y: 55
         },
         animate: {
            x: 280,
            y: -155,
            transition: {
               duration: 3,
               repeat: Infinity,
               ease,
               delay: 0.06,
               repeatType: 'mirror',
               repeatDelay: 0.2
            }
         },
         style: {
            width: '20px',
            height: '20px'
         }
      },
      id: 2
   },
   {
      variants: {
         initial: {
            x: 160,
            y: 55
         },
         animate: {
            x: 260,
            y: -155,
            transition: {
               duration: 3,
               repeat: Infinity,
               ease,
               delay: 0.06,
               repeatType: 'mirror',
               repeatDelay: 0.1
            }
         },
         style: {
            width: '20px',
            height: '20px'
         }
      },
      id: 3
   },
   {
      variants: {
         initial: {
            x: 190,
            y: 55
         },
         animate: {
            x: 290,
            y: -155,
            transition: {
               duration: 3,
               repeat: Infinity,
               ease,
               delay: 0.06,
               repeatType: 'mirror',
               repeatDelay: 0.4
            }
         },
         style: {
            width: '20px',
            height: '20px'
         }
      },
      id: 4
   }
];
