import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, getDoc } from 'firebase/firestore';

import { IReduxAuthInitialState, IReduxAuthInitialStateFields, IUserRole } from '../../types/auth';
import { auth, firestore } from '../../firebase';
import { getAuthUserDataFields } from '../helpers/auth';

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
      currentRole: '',
      tokenId: ''
   }
};

export const signInWithGoogleThunk = createAsyncThunk(
   `${name}/signInWithGoogleThunk`,
   async (_, { rejectWithValue }) => {
      try {
         const provider = new GoogleAuthProvider();
         const response = await signInWithPopup(auth, provider);
         const user = { ...response.user, tokenId: await response.user.getIdToken() };

         const docRef = doc(firestore, 'users', `${user.email}`);
         const docSnap = await getDoc(docRef);

         const data = (docSnap.data() as IUserRole) || { role: '', currentRole: '' };

         const tokenId = await user.getIdToken();

         return getAuthUserDataFields(user, data, tokenId);
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         } else {
            toast.error('Sorry. Something went wrong with Google sign-in');
         }
         return rejectWithValue(error);
      }
   }
);

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
   },
   extraReducers: (builder) => {
      builder
         .addCase(signInWithGoogleThunk.pending, () => {})
         .addCase(signInWithGoogleThunk.fulfilled, (state, action) => {
            const payload = action.payload;

            if (payload) {
               state.fields = payload;
            }
         })
         .addCase(signInWithGoogleThunk.rejected, () => {});
   }
});

const actionAuthentication = authenticationSlice.actions;

export { authenticationSlice, actionAuthentication };
