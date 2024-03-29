import { onAuthStateChanged } from 'firebase/auth';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { FirebaseError } from 'firebase/app';

import { useAppDispatch } from '../store/hooks';
import { actionAuthentication, initialState } from '../store/slices/authentication-slice';
import { auth, firestore } from '../firebase';
import { IAuthUserData, getAuthUserDataFields } from '../store/helpers/auth';
import { IUserRole } from '../types/auth';
import CircularLoading from '../component/loading';

interface IAuthProvider {
   children: ReactNode;
}

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
   const dispatch = useAppDispatch();
   const { replace, pathname } = useRouter();
   const [loading, setLoading] = useState(true);

   const redirectToPath = (path: string): void => {
      if (!pathname.includes(path)) {
         replace(`/${path}`);
      }
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
         if (currentUser) {
            try {
               const docRef = doc(firestore, 'users', `${currentUser.email}`);
               const docSnap = await getDoc(docRef);

               const data = (docSnap.data() as IUserRole) || { role: '', currentRole: '' };

               dispatch(actionAuthentication.authUserSave(getAuthUserDataFields(currentUser as IAuthUserData, data)));

               if (data.currentRole === 'ADMIN') {
                  redirectToPath('admin');
               } else if (data.currentRole === 'ROOT') {
                  redirectToPath('root');
               } else {
                  if (pathname.includes('admin')) replace('/');
               }
            } catch (error) {
               if (error instanceof FirebaseError) {
                  toast.error(`Firebase Error: ${error.message}`);
               } else if (error instanceof Error) {
                  toast.error(`Error: ${error.message}`);
               } else {
                  toast.error('Something went wrong');
               }
            }
         } else {
            dispatch(actionAuthentication.authUserSave(initialState.fields));
            replace('/');
         }
         setLoading(false);
      });

      return () => {
         unsubscribe();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (loading) {
      return <CircularLoading open />;
   }

   return <>{children}</>;
};

export default AuthProvider;
