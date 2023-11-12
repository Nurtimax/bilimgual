import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

import { IReduxAuthInitialState, IReduxAuthInitialStateFields, IUserRole } from '../../types/auth';
import { auth } from '../../firebase';

const name = 'auth';
export const initialState: IReduxAuthInitialState = {
   fields: {
      emailVerified: false,
      isAnonymous: false,
      metadata: {
         creationTime: '',
         lastSignInTime: '',
         createdAt: '',
         lastLoginAt: ''
      },
      providerData: [],
      refreshToken: '',
      tenantId: null,
      displayName: null,
      email: null,
      phoneNumber: null,
      photoURL: null,
      providerId: '',
      uid: '',
      role: '',
      currentRole: ''
   }
};

export const signInWithGoogle = async () => {
   try {
      const provider = new GoogleAuthProvider();

      return await signInWithPopup(auth, provider);
   } catch (error) {
      if (error instanceof Error) {
         toast.error(error.message);
      } else {
         toast.error('Sorry. Something went wrong with Google sign-in');
      }
   }
};

export const logOutHandler = async () => {
   try {
      await signOut(auth);
   } catch (error) {
      if (error instanceof Error) {
         toast.error(error.message);
      }
   }
};

const authenticationSlice = createSlice({
   name,
   initialState,
   reducers: {
      authUserSave: (state, actions: PayloadAction<IReduxAuthInitialStateFields>) => {
         const value = actions.payload;

         state.fields = value;
      },
      authUserRolesSave: (state, actions: PayloadAction<IUserRole>) => {
         const value = actions.payload;

         state.fields.role = value.role;
         state.fields.currentRole = value.currentRole;
      }
   }
});

const actionAuthentication = authenticationSlice.actions;

export { authenticationSlice, actionAuthentication };
