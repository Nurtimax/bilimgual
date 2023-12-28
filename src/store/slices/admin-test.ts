import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IChangeQuestionPayload, InitialState, InitialStateTest } from '../../types/admin-test';
import {
   createTestThunk,
   getTestByIdThunk,
   getTestByIdVariantsSelectByIdThunk,
   getTestThunk
} from '../thunks/admin-test';
import { checkArray } from '../../utils/helpers/array';

import { RootState } from '.';

export const adminTestName = 'admin-test';

const initialState: InitialState = {
   test: [],
   question: {
      id: '',
      name: '',
      duration: 0,
      questionType: 'select',
      active: false
   }
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
      },
      changeQuestion: (state, actions: PayloadAction<IChangeQuestionPayload>) => {
         const { key, value } = actions.payload;

         const newQuestion = { ...state.question, [key]: value };

         state.question = newQuestion;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(createTestThunk.pending, () => {})
         .addCase(createTestThunk.fulfilled, (state, actions: PayloadAction<InitialStateTest>) => {
            state.test.push(actions.payload);
         })
         .addCase(createTestThunk.rejected, () => {})
         .addCase(getTestThunk.pending, () => {})
         .addCase(getTestThunk.fulfilled, (state, actions) => {
            const data = actions.payload;

            if (checkArray(data)) {
               state.test = data;
            }
         })
         .addCase(getTestThunk.rejected, () => {})
         .addCase(getTestByIdThunk.pending, () => {})
         .addCase(getTestByIdThunk.fulfilled, () => {})
         .addCase(getTestByIdThunk.rejected, () => {})
         .addCase(getTestByIdVariantsSelectByIdThunk.rejected, () => {})
         .addCase(getTestByIdVariantsSelectByIdThunk.fulfilled, (state, actions) => {
            state.question = actions.payload;
         })
         .addCase(getTestByIdVariantsSelectByIdThunk.pending, () => {});
   }
});

export const selectorAdminTest = (state: RootState) => state.adminTest;

export const actionsAdminTest = slice.actions;

export default slice.reducer;
