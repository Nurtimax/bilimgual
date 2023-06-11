import { Easing } from 'framer-motion';

import { IFlightVariantsArray } from '../types';

const ease: Easing | Easing[] = 'backOut';

export const flightVariantsArray: IFlightVariantsArray[] = [
   {
      initial: {
         x: 290, // initial position on the x-axis
         y: 20 // initial position on the y-axis
      },
      animate: {
         x: 400, // final position on the x-axis
         y: -100, // final position on the y-axis
         transition: {
            duration: 3, // duration of the animation in seconds,
            repeat: Infinity,
            ease,
            delay: 0.3 * 0.2,
            repeatType: 'mirror',
            repeatDelay: 1 * 0.3
         }
      },
      style: {
         width: '20px',
         height: '20px'
      }
   },

   {
      initial: {
         x: 260, // initial position on the x-axis
         y: 30 // initial position on the y-axis
      },
      animate: {
         x: 370, // final position on the x-axis
         y: -100, // final position on the y-axis
         transition: {
            duration: 3, // duration of the animation in seconds,
            repeat: Infinity,
            ease,
            delay: 1 * 0.2,
            repeatType: 'mirror',
            repeatDelay: 1.2 * 0.3
         }
      },
      style: {
         width: '20px',
         height: '20px'
      }
   },

   {
      initial: {
         x: 230, // initial position on the x-axis
         y: 40 // initial position on the y-axis
      },
      animate: {
         x: 340, // final position on the x-axis
         y: -100, // final position on the y-axis
         transition: {
            duration: 3.5, // duration of the animation in seconds,
            repeat: Infinity,
            ease,
            delay: 0.4 * 0.2,
            repeatType: 'mirror',
            repeatDelay: 1.3 * 0.3
         }
      },
      style: {
         width: '20px',
         height: '20px'
      }
   },

   {
      initial: {
         x: 200, // initial position on the x-axis
         y: 40 // initial position on the y-axis
      },
      animate: {
         x: 310, // final position on the x-axis
         y: -100, // final position on the y-axis
         transition: {
            duration: 3.5, // duration of the animation in seconds,
            repeat: Infinity,
            ease,
            delay: 2 * 0.2,
            repeatType: 'mirror',
            repeatDelay: 1.4 * 0.3
         }
      },
      style: {
         width: '20px',
         height: '20px'
      }
   },

   {
      initial: {
         x: 170, // initial position on the x-axis
         y: 40 // initial position on the y-axis
      },
      animate: {
         x: 290, // final position on the x-axis
         y: -100, // final position on the y-axis
         transition: {
            duration: 3, // duration of the animation in seconds,
            repeat: Infinity,
            ease,
            delay: 0.5 * 0.2,
            repeatType: 'mirror',
            repeatDelay: 1.5 * 0.3
         }
      },
      style: {
         width: '20px',
         height: '20px'
      }
   },

   {
      initial: {
         x: 140, // initial position on the x-axis
         y: 40 // initial position on the y-axis
      },
      animate: {
         x: 260, // final position on the x-axis
         y: -100, // final position on the y-axis
         transition: {
            duration: 3, // duration of the animation in seconds,
            repeat: Infinity,
            ease,
            delay: 3 * 0.2,
            repeatType: 'mirror',
            repeatDelay: 1.6 * 0.3
         }
      },
      style: {
         width: '25px',
         height: '25px'
      }
   },

   {
      initial: {
         x: 110, // initial position on the x-axis
         y: 40 // initial position on the y-axis
      },
      animate: {
         x: 230, // final position on the x-axis
         y: -100, // final position on the y-axis
         transition: {
            duration: 3.5, // duration of the animation in seconds,
            repeat: Infinity,
            ease,
            delay: 0.6 * 0.2,
            repeatType: 'mirror',
            repeatDelay: 1.8 * 0.3
         }
      },
      style: {
         width: '25px',
         height: '25px'
      }
   },

   {
      initial: {
         x: 90, // initial position on the x-axis
         y: 40 // initial position on the y-axis
      },
      animate: {
         x: 200, // final position on the x-axis
         y: -100, // final position on the y-axis
         transition: {
            duration: 3, // duration of the animation in seconds,
            repeat: Infinity,
            ease,
            delay: 4 * 0.2,
            repeatType: 'mirror',
            repeatDelay: 1.9 * 0.3
         }
      },
      style: {
         width: '27px',
         height: '27px'
      }
   },

   {
      initial: {
         x: 60, // initial position on the x-axis
         y: 40 // initial position on the y-axis,
      },
      animate: {
         x: 170, // final position on the x-axis
         y: -100, // final position on the y-axis
         transition: {
            duration: 3.5, // duration of the animation in seconds,
            repeat: Infinity,
            ease,
            delay: 0.7 * 0.2,
            repeatType: 'mirror',
            repeatDelay: 2 * 0.3
         }
      },
      style: {
         width: '25px',
         height: '25px'
      }
   },

   {
      initial: {
         x: 30, // initial position on the x-axis
         y: 40 // initial position on the y-axis
      },
      animate: {
         x: 140, // final position on the x-axis
         y: -100, // final position on the y-axis
         transition: {
            duration: 3, // duration of the animation in seconds,
            repeat: Infinity,
            ease,
            delay: 5 * 0.2,
            repeatType: 'mirror',
            repeatDelay: 2.1 * 0.3
         }
      },
      style: {
         width: '20px',
         height: '20px'
      }
   }
];
