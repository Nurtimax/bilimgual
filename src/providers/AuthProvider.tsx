import { onAuthStateChanged } from 'firebase/auth';
import React, { FC, useEffect } from 'react';

import { useAppDispatch } from '../store/hooks';
import { actionAuthentication, getAuthUserDataFields } from '../store/slices/authentication-slice';
import { auth } from '../firebase';

const AuthProvider: FC = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser) {
            dispatch(actionAuthentication.authUserSave(getAuthUserDataFields(currentUser)));
         }
      });

      return () => {
         unsubscribe();
      };
   }, [dispatch]);

   return <></>;
};

export default AuthProvider;
