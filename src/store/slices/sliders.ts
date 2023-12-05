import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import axiosInctanse from '../../utils/helpers/axiosInstance';

import { RootState } from '.';

export interface ISlidersInitialStateData {
   id: number;
   title: string;
   subTitle: string;
   url: string;
}

interface InitialState {
   data: ISlidersInitialStateData[];
   dublicateData: ISlidersInitialStateData[];
   loading: boolean;
   selectedData: null | ISlidersInitialStateData;
   saveLoading: boolean;
}

export interface IChangeArrayValuesWithKeyPayload {
   key: string;
   value: string;
   id: number;
}

const name = 'sliders';

const initialState: InitialState = {
   data: [],
   dublicateData: [],
   loading: false,
   selectedData: null,
   saveLoading: false
};

export const getSlidersDataThunk = createAsyncThunk(`${name}/getSlidersDataThunk`, async (_, { rejectWithValue }) => {
   try {
      const response = await axiosInctanse.get('sliders.json');

      return response.data as ISlidersInitialStateData[];
   } catch (error) {
      if (error instanceof Error) {
         toast.error(error.message);
      }

      return rejectWithValue(error);
   }
});

export const putSlidersDataThunk = createAsyncThunk(
   `${name}/putSlidersDataThunk`,
   async (data: ISlidersInitialStateData[], { rejectWithValue, dispatch }) => {
      try {
         await axiosInctanse.put('sliders.json', data);

         dispatch(getSlidersDataThunk());
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         }

         return rejectWithValue(error);
      }
   }
);

const slidersSlice = createSlice({
   name,
   initialState,
   reducers: {
      changeArrayValuesWithKey: (state, actions: PayloadAction<IChangeArrayValuesWithKeyPayload>) => {
         const { key, value, id } = actions.payload;

         const indexToUpdate = state.data.findIndex((el) => el.id === id);

         if (indexToUpdate !== -1) {
            const newData = [...state.data];
            newData[indexToUpdate] = { ...newData[indexToUpdate], [key]: value };

            state.data = newData;
            state.selectedData = { ...newData[indexToUpdate] };
         }
      },
      selectValuesWithId: (state, actions: PayloadAction<{ id: number }>) => {
         const { id } = actions.payload;
         const data = state.data;

         const newSelected = data.find((item) => item.id === id);

         if (newSelected) {
            state.selectedData = newSelected;
         } else {
            state.selectedData = Array.isArray(data) && data.length ? data[0] : null;
         }
      },
      addValues: (state) => {
         state.data.push({ id: Date.now(), subTitle: '', title: '', url: '' });
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(getSlidersDataThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(getSlidersDataThunk.fulfilled, (state, actions) => {
            const data = actions.payload;

            if (Array.isArray(data) && data.length) {
               const selectedData = data[0];

               state.selectedData = selectedData;
               state.data = data;
               state.dublicateData = data;
            }

            state.loading = false;
         })
         .addCase(getSlidersDataThunk.rejected, (state) => {
            state.loading = false;
         })
         .addCase(putSlidersDataThunk.pending, (state) => {
            state.saveLoading = true;
         })
         .addCase(putSlidersDataThunk.rejected, (state) => {
            state.saveLoading = false;
         })
         .addCase(putSlidersDataThunk.fulfilled, (state) => {
            state.saveLoading = false;
         });
   }
});

export const actionSliders = slidersSlice.actions;

export const selectorSliders = (state: RootState) => state.sliders;

export default slidersSlice.reducer;
