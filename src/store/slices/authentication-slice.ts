import { createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';

import { IReduxAuthInitialState } from '../../types/auth';
import { auth } from '../../firebase';

import { RootState } from '.';

const name = 'auth';
const initialState: IReduxAuthInitialState = {
   fields: {
      email: '',
      password: ''
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
      authUserSave: (state, actions) => {
         const value = actions.payload;

         state.fields = value;
      }
   }
});

const actionAuthentication = authenticationSlice.actions;
export const authSelector = (state: RootState) => state.auth;

export { authenticationSlice, actionAuthentication };
