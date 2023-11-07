import { Box, Button } from '@mui/material';
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';

const SocialFroms = () => {
   return (
      <Box sx={{ width: '100%', display: 'grid' }}>
         <Button variant="outlined" startIcon={<GoogleIcon />}>
            SIGN UP WITH GOOGLE
         </Button>
      </Box>
   );
};

export default SocialFroms;
