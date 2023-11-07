import { Box, Card, CardContent, CardHeader, IconButton, Paper } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';

import Forms from './Forms';

const MainSignIn = () => {
   const pathname = useRouter();

   const handleBackNavigate = () => {
      pathname.back();
   };

   return (
      <Box>
         <Card elevation={2} component={Paper} sx={{ background: 'white' }}>
            <CardHeader
               action={
                  <IconButton onClick={handleBackNavigate}>
                     <CloseIcon />
                  </IconButton>
               }
            />
            <CardContent>
               <Forms />
            </CardContent>
            <CardContent></CardContent>
         </Card>
      </Box>
   );
};

export default MainSignIn;
