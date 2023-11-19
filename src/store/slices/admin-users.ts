import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { firestore } from '../../firebase';
import { IAdminUser } from '../../types/auth';

const name = 'admin-user';

interface InitialState {
   users: IAdminUser[];
   loading: boolean;
}

const initialState: InitialState = {
   users: [],
   loading: false
};

export const getAdminUsersThunk = createAsyncThunk(`${name}/getAdminUsersThunk`, async (_, { rejectWithValue }) => {
   const users: IAdminUser[] = [];
   try {
      const querySnapshot = await getDocs(collection(firestore, 'users'));

      querySnapshot.forEach((doc) => {
         users.push({
            ...doc.data(),
            id: doc.id
         } as IAdminUser);
      });

      return users;
   } catch (error) {
      if (error instanceof Error) {
         toast.error(error.message);
      } else {
         toast.error('Something is wrong with users database');
      }
      return rejectWithValue(error);
   }
});

const sliceAdminUsers = createSlice({
   name,
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAdminUsersThunk.fulfilled, (state, action: PayloadAction<IAdminUser[]>) => {
            const users = action.payload;

            state.users = users;
            state.loading = false;
         })
         .addCase(getAdminUsersThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(getAdminUsersThunk.rejected, (state) => {
            state.loading = false;
         });
   }
});

export default sliceAdminUsers.reducer;
