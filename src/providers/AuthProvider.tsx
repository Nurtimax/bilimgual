import { onAuthStateChanged } from 'firebase/auth';
import React, { FC, ReactNode, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useAppDispatch } from '../store/hooks';
import { actionAuthentication, initialState } from '../store/slices/authentication-slice';
import { auth, firestore } from '../firebase';
import { getAuthUserDataFields } from '../store/helpers/auth';
import { IUserRole } from '../types/auth';

interface IAuthProvider {
   children: ReactNode;
}

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
   const dispatch = useAppDispatch();
   const { replace } = useRouter();

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
         }
      });

      return () => {
         unsubscribe();
      };
   }, [dispatch]);

   return <>{children}</>;
};

export default AuthProvider;
