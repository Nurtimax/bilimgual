import { Box, BoxProps, Toolbar } from '@mui/material';
import React, { FC } from 'react';

const ToolbarComponent: FC<BoxProps> = (props) => {
   return (
      <Box {...props}>
         <Toolbar />
         <Toolbar />
         {props.children}
      </Box>
   );
};

export default ToolbarComponent;
