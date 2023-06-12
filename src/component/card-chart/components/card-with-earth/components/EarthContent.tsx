import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import Earth from './Earth';

interface IEarthContentProps {
   [key: string]: unknown;
}

const StyledEarthContent = styled(Grid)(() => ({
   position: 'absolute',
   zIndex: -10,
   top: '10%'
}));

const EarthContent: FC<IEarthContentProps> = () => {
   return (
      <StyledEarthContent item>
         <Earth />
      </StyledEarthContent>
   );
};

export default EarthContent;
