import { onAuthStateChanged } from 'firebase/auth';
import React, { FC, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { useAppDispatch } from '../store/hooks';
import { actionAuthentication, initialState } from '../store/slices/authentication-slice';
import { auth, firestore } from '../firebase';
import { getAuthUserDataFields } from '../store/helpers/auth';

const AuthProvider: FC = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
         if (currentUser) {
            try {
               const docRef = doc(firestore, 'users', `${currentUser.email}`);

               const docSnap = await getDoc(docRef);

               console.log(docSnap.data());
            } catch (error) {
               if (error instanceof Error) {
                  toast.error(error.message);
               } else {
                  toast.error('Something is wrong');
               }
               return;
            }

            dispatch(actionAuthentication.authUserSave(getAuthUserDataFields(currentUser)));
         } else {
            dispatch(actionAuthentication.authUserSave(initialState.fields));
         }
      });

      return () => {
         unsubscribe();
      };
   }, [dispatch]);

   return <></>;
};

export default AuthProvider;
