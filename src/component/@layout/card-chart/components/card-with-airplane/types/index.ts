import { Variants } from 'framer-motion';
import { CSSProperties } from 'react';

export type IFlightVariantsArray = {
   variants: Variants & {
      style?: CSSProperties;
   };
   id: number;
};
