import { useScrollTrigger } from '@mui/material';
import { cloneElement, ReactElement } from 'react';

interface Props {
   /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
   window?: () => Window;
   children: ReactElement;
}

const ElevationScroll = (props: Props) => {
   const { children, window } = props;
   // Note that you normally won't need to set the window ref as useScrollTrigger
   // will default to window.
   // This is only being set here because the demo is in an iframe.
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined
   });

   return cloneElement(children, {
      sx: {
         background: trigger ? '#fff' : 'none',
         boxShadow: trigger ? '0px 6px 10px rgba(0, 0, 0, 0.03)' : 'none'
      }
   });
};

export default ElevationScroll;
