import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { IReduxAuthInitialState, IReduxAuthInitialStateFields, IUserRole } from '../../types/auth';
import { auth, firestore } from '../../firebase';
import { IAuthUserData, getAuthUserDataFields } from '../helpers/auth';
import { putUsersClickRequest } from '../../utils/helpers/date';

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
   },
   loading: false,
   error: false,
   errorMessage: ''
};

export const signInWithGoogleThunk = createAsyncThunk(
   `${name}/signInWithGoogleThunk`,
   async (_, { rejectWithValue }) => {
      try {
         const provider = new GoogleAuthProvider();
         const response = await signInWithPopup(auth, provider);

         const user = response.user as IAuthUserData;

         const docRef = doc(firestore, 'users', `${user.email}`);
         const docSnap = await getDoc(docRef);

         const data = (docSnap.data() as IUserRole) || { role: '', currentRole: '' };

         if (user) {
            try {
               const docRef = doc(firestore, 'users', `${user.email}`);

               const docSnap = await getDoc(docRef);

               const data = docSnap.data() as IUserRole;

               const docData = data || {
                  role: 'USER',
                  currentRole: 'USER',
                  createdAt: new Date()
               };

               await setDoc(doc(firestore, 'users', `${user.email}`), docData);

               await putUsersClickRequest(user?.email || '');
            } catch (error) {
               if (error instanceof Error) {
                  toast.error(error.message);
               } else {
                  toast.error('Something wrong with database');
               }
            }
         }

         return getAuthUserDataFields(user, data);
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

export const logOutAuthThunk = createAsyncThunk(`${name}/logOutAuthThunk`, async () => {
   try {
      await signOut(auth);
   } catch (error) {
      if (error instanceof Error) {
         toast.error(error.message);
      }
   }
});

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
         .addCase(signInWithGoogleThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(signInWithGoogleThunk.fulfilled, (state, action) => {
            const payload = action.payload;

            if (payload) {
               state.fields = payload;
            }

            state.loading = false;
         })
         .addCase(signInWithGoogleThunk.rejected, (state) => {
            state.loading = false;
         })
         .addCase(logOutAuthThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(logOutAuthThunk.fulfilled, (state) => {
            state.loading = false;
         })
         .addCase(logOutAuthThunk.rejected, (state) => {
            state.loading = false;
         });
   }
});

const actionAuthentication = authenticationSlice.actions;

export { authenticationSlice, actionAuthentication };
