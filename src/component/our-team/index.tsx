import { Box, Typography } from '@mui/material';
import React from 'react';

import ImageList from './ImageList';

const MainOutTeam = () => {
   return (
      <Box>
         <Typography variant="h3" component="h2" textAlign="center" color="#3752B4">
            Our Team
         </Typography>
         <ImageList />
      </Box>
   );
};

export default MainOutTeam;
