import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import Earth from './Earth';

const StyledEarthContent = styled(Box)(() => ({
   position: 'absolute',
   zIndex: -10,
   width: '100%',
   top: '5%',
   display: 'flex',
   justifyContent: 'center'
}));

const EarthContent: FC = () => {
   return (
      <StyledEarthContent>
         <div id="content">
            <Earth />
         </div>
      </StyledEarthContent>
   );
};

export default EarthContent;
