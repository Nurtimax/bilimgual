import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { TestType } from '../../component/TestByType';

import { RootState } from '.';

const name = 'admin-test';

interface InitialStateTestQuestions {
   id: string;
   name: string;
   duration: number;
   questionType: TestType;
   active: boolean;
}

interface InitialStateTest {
   id: string;
   title: string;
   active: boolean;
   shortDescription: string;
   questions: InitialStateTestQuestions[];
}

interface InitialState {
   test: InitialStateTest[];
}

const initialState: InitialState = {
   test: []
};

const slice = createSlice({
   name,
   initialState,
   reducers: {
      createTest: (state) => {
         state.test.push({ active: false, id: uuidv4(), questions: [], shortDescription: '', title: '' });
      }
   },
   extraReducers: () => {}
});

export const selectorAdminTest = (state: RootState) => state.adminTest;

export const actionsAdminTest = slice.actions;

export default slice.reducer;
