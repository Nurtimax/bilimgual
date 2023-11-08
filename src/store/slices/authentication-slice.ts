import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';

import { IReduxAuthInitialState, IReduxAuthInitialStateFields } from '../../types/auth';
import { auth } from '../../firebase';

import { RootState } from '.';

const name = 'auth';
const initialState: IReduxAuthInitialState = {
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
      uid: ''
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

const authenticationSlice = createSlice({
   name,
   initialState,
   reducers: {
      authUserSave: (state, actions: PayloadAction<IReduxAuthInitialStateFields>) => {
         const value = actions.payload;

         state.fields = value;
      }
   }
});

const actionAuthentication = authenticationSlice.actions;
export const authSelector = (state: RootState) => state.auth;

export const getAuthUserDataFields = (user: User): IReduxAuthInitialStateFields => {
   const {
      displayName,
      email,
      emailVerified,
      isAnonymous,
      metadata,
      phoneNumber,
      photoURL,
      providerData,
      providerId,
      refreshToken,
      tenantId,
      uid
   } = user;

   return {
      displayName,
      email,
      emailVerified,
      isAnonymous,
      metadata,
      phoneNumber,
      photoURL,
      providerData,
      providerId,
      refreshToken,
      tenantId,
      uid
   };
};

export { authenticationSlice, actionAuthentication };
