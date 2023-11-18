import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { ITeamImageCard } from '../../types/team';
import axiosInctanse from '../../utils/helpers/axiosInstance';

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
   try {
      const response = await axiosInctanse.get('/teams.json');

      const teams = Object.keys(response.data).map((key) => ({ ...response.data[key], id: key }));

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
