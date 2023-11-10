import { onAuthStateChanged } from 'firebase/auth';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { useAppDispatch } from '../store/hooks';
import { actionAuthentication, initialState } from '../store/slices/authentication-slice';
import { auth, firestore } from '../firebase';
import { getAuthUserDataFields } from '../store/helpers/auth';
import { IUserRole } from '../types/auth';
import CircularLoading from '../component/loading';

interface IAuthProvider {
   children: ReactNode;
}

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
   const dispatch = useAppDispatch();
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
         if (currentUser) {
            try {
               const docRef = doc(firestore, 'users', `${currentUser.email}`);

               const docSnap = await getDoc(docRef);

               const data = docSnap.data() as IUserRole;

               if (data) {
                  dispatch(actionAuthentication.authUserSave(getAuthUserDataFields(currentUser, data)));
               }
               setLoading(true);
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

   if (!loading) {
      return <CircularLoading open={!loading} />;
   }

   return <>{children}</>;
};

export default AuthProvider;
