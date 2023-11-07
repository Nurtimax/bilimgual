import { onAuthStateChanged } from 'firebase/auth';
import React, { FC, ReactNode, useEffect } from 'react';

import { useAppDispatch } from '../store/hooks';
import { actionAuthentication } from '../store/slices/authentication-slice';
import { auth } from '../firebase';

interface IAuthProvider {
   children: ReactNode;
}

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         dispatch(actionAuthentication.authUserSave(currentUser));
      });

      return () => {
         unsubscribe();
      };
   }, [dispatch]);

   return <>{children}</>;
};

export default AuthProvider;
