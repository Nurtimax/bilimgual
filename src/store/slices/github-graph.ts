import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { InitialStateData } from '../../types/graph';
import axiosInctanse from '../../utils/helpers/axiosInstance';

import { RootState } from '.';

const name = 'data';

const initialState: InitialStateData = {
   data: {},
   loading: false,
   error: false,
   year: 2023
};

export const getDataThunk = createAsyncThunk(`${name}/getDataThunk`, async () => {
   try {
      const year = new Date().getFullYear();

      const response = await axiosInctanse.get(`/usersChart/${year}.json`);

      return response.data;
   } catch (error) {
      if (error instanceof Error) {
         toast.error(error.message);
      }
   }
});

const slice = createSlice({
   name,
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getDataThunk.fulfilled, (state, actions) => {
            const data = actions.payload;

            state.data = data;
            state.error = false;
            state.loading = false;
         })
         .addCase(getDataThunk.rejected, (state) => {
            state.loading = false;
            state.error = true;
         })
         .addCase(getDataThunk.pending, (state) => {
            state.loading = true;
         });
   }
});

export const actionsData = slice.actions;

export const selectorGithubGraph = (state: RootState) => state.githubGraph;

export default slice.reducer;
