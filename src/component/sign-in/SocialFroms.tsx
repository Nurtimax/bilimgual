import { Box, Button } from '@mui/material';
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { addDoc, collection } from 'firebase/firestore';

import { signInWithGoogle } from '../../store/slices/authentication-slice';
import { firestore } from '../../firebase';

const SocialFroms = () => {
   const handleSignInWithGoogle = async () => {
      const response = await signInWithGoogle();

      if (response) {
         await addDoc(collection(firestore, 'users', response.user.uid), { role: 'USER' });
      }
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
