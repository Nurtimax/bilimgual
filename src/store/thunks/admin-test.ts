import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

import { ICreateTestByIdVaraintsThunk, InitialStateTest } from '../../types/admin-test';
import { RootState } from '../slices';
import { actionsAdminTest, adminTestName } from '../slices/admin-test';
import axiosInctanse from '../../utils/helpers/axiosInstance';

interface YourObjectType {
   [key: string]: { [key: string]: unknown };
}

interface TransformedObjectType {
   id: string;
   [key: string]: unknown;
}

export function transformObjectToArray(object: YourObjectType): TransformedObjectType[] {
   const array = [];

   for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
         const element = object[key];

         array.push({ ...element, id: key });
      }
   }

   return array;
}

export const urlPathSpecials = (url: string, ...urls: string[]): string => {
   const newUrls = urls.join('');

   return `${url}/${newUrls}`;
};

export const createTestThunk = createAsyncThunk(
   `${adminTestName}/createTestThunk`,
   async (test: InitialStateTest, { rejectWithValue, getState, dispatch }) => {
      const state = getState() as RootState;
      dispatch(actionsAdminTest.testLoading(test.id));

      const email = state.auth.fields.email;
      try {
         const response = await axiosInctanse.post(`test/${email?.replace(/\./g, '')}.json`, test);

         return { ...test, id: response.data?.name };
      } catch (error) {
         dispatch(actionsAdminTest.testLoading(test.id));

         if (error instanceof Error) {
            toast.error(error.message);
         }

         return rejectWithValue(error);
      }
   }
);

export const createTestByIdVaraintsThunk = createAsyncThunk(
   `${adminTestName}/createTestThunk`,
   async ({ question, id }: ICreateTestByIdVaraintsThunk, { rejectWithValue, getState }) => {
      const state = getState() as RootState;

      const email = state.auth.fields.email;
      try {
         const response = await axiosInctanse.post(
            urlPathSpecials('test', `${email?.replace(/\./g, '')}/${id}/questions.json`),
            question
         );

         return { ...question, id: response.data?.name };
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         }

         return rejectWithValue(error);
      }
   }
);

export const getTestThunk = createAsyncThunk(
   `${adminTestName}/getTestThunk`,
   async (_, { rejectWithValue, getState }) => {
      const state = getState() as RootState;
      const email = state.auth.fields.email;

      try {
         const { data } = await axiosInctanse.get(urlPathSpecials('test', `${email?.replace(/\./g, '')}.json`));

         return transformObjectToArray(data) as unknown as InitialStateTest[];
      } catch (error) {
         if (error instanceof AxiosError) {
            toast.error(error.message);
         } else if (error instanceof Error) {
            toast.error(error.message);
         }

         return rejectWithValue(error);
      }
   }
);

export const getTestByIdThunk = createAsyncThunk(
   `${adminTestName}/getTestByIdThunk`,
   async (id: string, { rejectWithValue, getState }) => {
      const state = getState() as RootState;
      const email = state.auth.fields.email;
      try {
         const { data: object } = await axiosInctanse.get(
            urlPathSpecials('test', `${email?.replace(/\./g, '')}/${id}.json`)
         );

         return object;
      } catch (error) {
         if (error instanceof AxiosError) {
            toast.error(error.message);
         } else if (error instanceof Error) {
            toast.error(error.message);
         }

         return rejectWithValue(error);
      }
   }
);

export const putTestByIdThunk = createAsyncThunk(
   `${adminTestName}/getTestByIdThunk`,
   async (data: InitialStateTest, { rejectWithValue, getState }) => {
      const state = getState() as RootState;
      const email = state.auth.fields.email;
      try {
         await axiosInctanse.put(urlPathSpecials('test', `${email?.replace(/\./g, '')}/${data?.id}.json`), data);
      } catch (error) {
         if (error instanceof AxiosError) {
            toast.error(error.message);
         } else if (error instanceof Error) {
            toast.error(error.message);
         }

         return rejectWithValue(error);
      }
   }
);

export const getTestByIdVariantsSelectByIdThunk = createAsyncThunk(
   `${adminTestName}/getTestByIdThunk`,
   async ({ id, selectId }: { id: string; selectId: string }, { rejectWithValue, getState }) => {
      const state = getState() as RootState;
      const email = state.auth.fields.email;
      try {
         const { data: object } = await axiosInctanse.get(
            urlPathSpecials('test', `${email?.replace(/\./g, '')}/${id}/questions/${selectId}.json`)
         );

         return object;
      } catch (error) {
         if (error instanceof AxiosError) {
            toast.error(error.message);
         } else if (error instanceof Error) {
            toast.error(error.message);
         }

         return rejectWithValue(error);
      }
   }
);
