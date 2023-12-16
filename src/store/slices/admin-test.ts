import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { InitialState, InitialStateTest } from '../../types/admin-test';
import { createTestThunk } from '../thunks/admin-test';

import { RootState } from '.';

export const adminTestName = 'admin-test';

const initialState: InitialState = {
   test: []
};

const slice = createSlice({
   name: adminTestName,
   initialState,
   reducers: {
      createTest: (state, actions: PayloadAction<InitialStateTest>) => {
         state.test.push(actions.payload);
      },
      testLoading: (state, actions: PayloadAction<string>) => {
         const newTest = state.test.map((el) => {
            if (el.id === actions.payload) {
               return { ...el, loading: !el.loading };
            }
            return el;
         });

         state.test = newTest;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(createTestThunk.pending, () => {})
         .addCase(createTestThunk.fulfilled, (state, actions: PayloadAction<InitialStateTest>) => {
            state.test.push(actions.payload);
         })
         .addCase(createTestThunk.rejected, () => {});
   }
});

export const selectorAdminTest = (state: RootState) => state.adminTest;

export const actionsAdminTest = slice.actions;

export default slice.reducer;
