import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface ICircularLoading {
   open: boolean;
}

const CircularLoading: React.FC<ICircularLoading> = ({ open }) => {
   return (
      <Backdrop sx={{ color: '#fff', zIndex: '1000' }} open={open}>
         <CircularProgress color="inherit" sx={{ width: 'inherit !important', height: 'inherit !important' }} />
      </Backdrop>
   );
};

export default CircularLoading;
