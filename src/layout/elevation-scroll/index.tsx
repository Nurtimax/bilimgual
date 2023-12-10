import { useScrollTrigger } from '@mui/material';
import { cloneElement, ReactElement } from 'react';

interface Props {
   window?: () => Window;
   children: ReactElement;
}

const ElevationScroll = (props: Props) => {
   const { children, window } = props;
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
