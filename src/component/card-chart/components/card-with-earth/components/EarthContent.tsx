import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import Earth from './Earth';

const StyledEarthContent = styled(Grid)(() => ({
   position: 'absolute',
   zIndex: -10,
   top: '10%'
}));

const EarthContent: FC = () => {
   return (
      <StyledEarthContent item>
         <Earth />
      </StyledEarthContent>
   );
};

export default EarthContent;
