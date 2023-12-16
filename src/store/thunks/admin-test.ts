import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { InitialStateTest } from '../../types/admin-test';
import { RootState } from '../slices';
import { actionsAdminTest, adminTestName } from '../slices/admin-test';
import axiosInctanse from '../../utils/helpers/axiosInstance';

export const createTestThunk = createAsyncThunk(
   `${adminTestName}/createTestThunk`,
   async (test: InitialStateTest, { rejectWithValue, getState, dispatch }) => {
      const state = getState() as RootState;
      dispatch(actionsAdminTest.testLoading(test.id));

      const email = state.auth.fields.email;
      try {
         const response = await axiosInctanse.post(`test/${email}.json`, test);
         console.log(response);

         return test;
      } catch (error) {
         dispatch(actionsAdminTest.testLoading(test.id));

         if (error instanceof Error) {
            toast.error(error.message);
         }

         return rejectWithValue(error);
      }
   }
);
