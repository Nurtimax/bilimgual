import { onAuthStateChanged } from 'firebase/auth';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useAppDispatch } from '../store/hooks';
import { actionAuthentication, initialState } from '../store/slices/authentication-slice';
import { auth, firestore } from '../firebase';
import { getAuthUserDataFields } from '../store/helpers/auth';
import { IUserRole } from '../types/auth';
import CircularLoading from '../component/loading';

interface IAuthProvider {
   children: ReactNode;
}

// ... (import statements remain the same)

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
   const dispatch = useAppDispatch();
   const { replace } = useRouter();
   const [loading, setLoading] = useState(true); // Set to true initially

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
         if (currentUser) {
            try {
               const docRef = doc(firestore, 'users', `${currentUser.email}`);
               const docSnap = await getDoc(docRef);

               const data = (docSnap.data() as IUserRole) || { role: '', currentRole: '' };

               dispatch(actionAuthentication.authUserSave(getAuthUserDataFields(currentUser, data)));

               if (data.currentRole === 'ADMIN') {
                  replace('/admin');
               } else {
                  replace('/');
               }
            } catch (error) {
               if (error instanceof Error) {
                  toast.error(error.message);
               } else {
                  toast.error('Something is wrong');
               }
            }
         } else {
            dispatch(actionAuthentication.authUserSave(initialState.fields));
            replace('/');
         }
         setLoading(false); // Always set loading to true when the state changes
      });

      // Cleanup function
      return () => {
         unsubscribe(); // Unsubscribe from the onAuthStateChanged listener
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (loading) {
      return <CircularLoading open />;
   }

   return <>{children}</>;
};

export default AuthProvider;
