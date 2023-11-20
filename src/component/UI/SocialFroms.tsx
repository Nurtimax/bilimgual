import { Box, Button } from '@mui/material';
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { signInWithGoogleThunk } from '../../store/slices/authentication-slice';
import { firestore } from '../../firebase';
import { IUserRole } from '../../types/auth';
import { useAppDispatch } from '../../store/hooks';
import { putUsersClickRequest } from '../../utils/helpers/date';

const SocialFroms = () => {
   const dispatch = useAppDispatch();

   const handleSignInWithGoogle = async () => {
      const response = await dispatch(signInWithGoogleThunk()).unwrap();

      if (response) {
         try {
            const docRef = doc(firestore, 'users', `${response.email}`);

            const docSnap = await getDoc(docRef);

            const data = docSnap.data() as IUserRole;

            const docData = data || {
               role: 'USER',
               currentRole: 'USER',
               createdAt: new Date()
            };

            await setDoc(doc(firestore, 'users', `${response.email}`), docData);

            await putUsersClickRequest(response?.email || '');
         } catch (error) {
            if (error instanceof Error) {
               toast.error(error.message);
            } else {
               toast.error('Something wrong with database');
            }
         }
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
