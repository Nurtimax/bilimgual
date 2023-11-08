import { Easing } from 'framer-motion';

import { IFlightVariantsArray } from '../types';

const ease: Easing | Easing[] = 'backOut';

export const flightVariantsArray: IFlightVariantsArray[] = [
   {
      variants: {
         initial: {
            x: 290,
            y: 20
         },
         animate: {
            x: 400,
            y: -100,
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
            x: 260,
            y: 30
         },
         animate: {
            x: 370,
            y: -100,
            transition: {
               duration: 3,
               repeat: Infinity,
               ease,
               delay: 0.2,
               repeatType: 'mirror',
               repeatDelay: 0.36
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
            x: 230,
            y: 40
         },
         animate: {
            x: 340,
            y: -100,
            transition: {
               duration: 3.5,
               repeat: Infinity,
               ease,
               delay: 0.08000000000000002,
               repeatType: 'mirror',
               repeatDelay: 0.39
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
            x: 200,
            y: 40
         },
         animate: {
            x: 310,
            y: -100,
            transition: {
               duration: 3.5,
               repeat: Infinity,
               ease,
               delay: 0.4,
               repeatType: 'mirror',
               repeatDelay: 0.42
            }
         },
         style: {
            width: '20px',
            height: '20px'
         }
      },
      id: 4
   },
   {
      variants: {
         initial: {
            x: 170,
            y: 40
         },
         animate: {
            x: 290,
            y: -100,
            transition: {
               duration: 3,
               repeat: Infinity,
               ease,
               delay: 0.1,
               repeatType: 'mirror',
               repeatDelay: 0.44999999999999996
            }
         },
         style: {
            width: '20px',
            height: '20px'
         }
      },
      id: 5
   },
   {
      variants: {
         initial: {
            x: 140,
            y: 40
         },
         animate: {
            x: 260,
            y: -100,
            transition: {
               duration: 3,
               repeat: Infinity,
               ease,
               delay: 0.6000000000000001,
               repeatType: 'mirror',
               repeatDelay: 0.48
            }
         },
         style: {
            width: '25px',
            height: '25px'
         }
      },
      id: 6
   },
   {
      variants: {
         initial: {
            x: 110,
            y: 40
         },
         animate: {
            x: 230,
            y: -100,
            transition: {
               duration: 3.5,
               repeat: Infinity,
               ease,
               delay: 0.12,
               repeatType: 'mirror',
               repeatDelay: 0.54
            }
         },
         style: {
            width: '25px',
            height: '25px'
         }
      },
      id: 7
   },
   {
      variants: {
         initial: {
            x: 90,
            y: 40
         },
         animate: {
            x: 200,
            y: -100,
            transition: {
               duration: 3,
               repeat: Infinity,
               ease,
               delay: 0.8,
               repeatType: 'mirror',
               repeatDelay: 0.57
            }
         },
         style: {
            width: '27px',
            height: '27px'
         }
      },
      id: 8
   },
   {
      variants: {
         initial: {
            x: 60,
            y: 40
         },
         animate: {
            x: 170,
            y: -100,
            transition: {
               duration: 3.5,
               repeat: Infinity,
               ease,
               delay: 0.13999999999999999,
               repeatType: 'mirror',
               repeatDelay: 0.6
            }
         },
         style: {
            width: '25px',
            height: '25px'
         }
      },
      id: 9
   },
   {
      variants: {
         initial: {
            x: 30,
            y: 40
         },
         animate: {
            x: 140,
            y: -100,
            transition: {
               duration: 3,
               repeat: Infinity,
               ease,
               delay: 1,
               repeatType: 'mirror',
               repeatDelay: 0.63
            }
         },
         style: {
            width: '20px',
            height: '20px'
         }
      },
      id: 10
   }
];
