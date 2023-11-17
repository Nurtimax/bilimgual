import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { collection, getDocs } from 'firebase/firestore';

import { ITeamImageCard } from '../../types/team';
import { firestore } from '../../firebase';

import { RootState } from '.';

interface InitialState {
   teams: ITeamImageCard[];
   loading: boolean;
}

const name = 'our_team';

const initialState: InitialState = {
   teams: [],
   loading: false
};

export const getOurTeamThunk = createAsyncThunk(`${name}/getOurTeamThunk`, async (_, { rejectWithValue }) => {
   const teams: ITeamImageCard[] = [];
   try {
      const querySnapshot = await getDocs(collection(firestore, 'team'));
      querySnapshot.forEach((doc) => {
         teams.push({ ...doc.data(), id: doc.id } as unknown as ITeamImageCard);
      });

      return teams;
   } catch (error) {
      if (error instanceof Error) {
         toast.error(error.message);
      }
      return rejectWithValue(error);
   }
});

const ourTeamSlice = createSlice({
   name,
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getOurTeamThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(getOurTeamThunk.fulfilled, (state, actions) => {
            const value = actions.payload;

            state.teams = value;

            state.loading = false;
         })
         .addCase(getOurTeamThunk.rejected, (state) => {
            state.loading = false;
         });
   }
});

export const actionOurTeam = ourTeamSlice.actions;
export const selectorOurTeam = (state: RootState) => state.ourTeam;

export default ourTeamSlice.reducer;
