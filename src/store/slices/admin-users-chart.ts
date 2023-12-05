import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

import axiosInctanse from '../../utils/helpers/axiosInstance';
import { TUsersTimeChartTabValues } from '../../component/@admin/root/UserChart';
import { customData, customUrls } from '../../utils/helpers/date';

import { RootState } from '.';

interface InitialState {
   loading: boolean;
   users: string[];
}

const name = 'admin_users_chart';

const initialState: InitialState = {
   loading: false,
   users: []
};

export interface IUsersChartData {
   [month: string]: {
      [day: string]: string[];
   };
}

export const getAdminUsersChartThunk = createAsyncThunk(
   `${name}/getAdminUsersChartThunk`,
   async ({ param }: { param: TUsersTimeChartTabValues }) => {
      try {
         const url = customUrls(param);

         const response = await axiosInctanse.get(url);

         const data = response.data;

         const newData: string[] = customData(param, data);

         return newData;
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         }
         if (error instanceof AxiosError) {
            toast.error(error.message);
         }
      }
   }
);

const adminUsersChart = createSlice({
   name,
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAdminUsersChartThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(getAdminUsersChartThunk.fulfilled, (state, actions) => {
            const values = actions.payload;

            if (values) {
               state.users = values;
            }

            state.loading = false;
         })
         .addCase(getAdminUsersChartThunk.rejected, (state) => {
            state.loading = false;
         });
   }
});

export const actionAdminUsersChart = adminUsersChart.actions;

export const selectorAdminUsersChart = (state: RootState) => state.adminUsersChart;

export default adminUsersChart.reducer;
