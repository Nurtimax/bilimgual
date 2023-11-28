import { Box, Button } from '@mui/material';
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';

import { signInWithGoogleThunk } from '../../store/slices/authentication-slice';
import { useAppDispatch } from '../../store/hooks';

const SocialFroms = () => {
   const dispatch = useAppDispatch();

   const handleSignInWithGoogle = () => {
      dispatch(signInWithGoogleThunk());
   };

   return (
      <Box sx={{ width: '100%', display: 'grid' }}>
         <Button variant="outlined" startIcon={<GoogleIcon />} onClick={handleSignInWithGoogle}>
            SIGN UP WITH GOOGLE
         </Button>
      </Box>
   );
};

export default SocialFroms;
