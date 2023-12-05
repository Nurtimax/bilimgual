import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import axiosInctanse from '../../utils/helpers/axiosInstance';

import { RootState } from '.';

export interface IVideoCardProps {
   video: string;
   title: string;
   duration: number;
   isSaved: boolean;
   id: string;
}

interface InitialState {
   loading: boolean;
   cards: IVideoCardProps[];
}

export interface IChangeUsefullVideoCardByIdPayload {
   key: keyof IVideoCardProps;
   value: string;
   id: string;
}

const name = 'usefull';

const initialState: InitialState = {
   cards: [],
   loading: false
};

export const getUsefullVideoCardsThunk = createAsyncThunk(
   `${name}/getUsefullVideoCards`,
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInctanse.get('/usefullCards.json');

         const usefullCards: IVideoCardProps[] = Object.keys(data || {}).map((key) => ({ ...data[key], id: key }));

         return usefullCards;
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         }
         return rejectWithValue(error);
      }
   }
);

export const saveUsefullVideoCardsThunk = createAsyncThunk(
   `${name}/saveUsefullVideoCards`,
   async (data: IVideoCardProps, { rejectWithValue, dispatch }) => {
      try {
         await axiosInctanse.post('/usefullCards.json', data);

         await dispatch(getUsefullVideoCardsThunk()).unwrap();

         toast.success('Successfully saved');
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         }
         return rejectWithValue(error);
      }
   }
);

export const deleteUsefullVideoCardByIdThunk = createAsyncThunk(
   `${name}/deleteUsefullVideoCardByIdThunk`,
   async (id: string, { rejectWithValue, dispatch }) => {
      try {
         await axiosInctanse.delete(`/usefullCards/${id}.json`);

         await dispatch(getUsefullVideoCardsThunk()).unwrap();
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         }
         return rejectWithValue(error);
      }
   }
);

export const saveUsefullVideoCardByIdThunk = createAsyncThunk(
   `${name}/saveUsefullVideoCardByIdThunk`,
   async (data: IVideoCardProps, { rejectWithValue, dispatch }) => {
      try {
         await axiosInctanse.put(`/usefullCards/${data.id}.json`, data);

         await dispatch(getUsefullVideoCardsThunk()).unwrap();
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         }
         return rejectWithValue(error);
      }
   }
);

const usefullSlice = createSlice({
   name,
   initialState,
   reducers: {
      changeUsefullVideoCardById: (state, actions: PayloadAction<IChangeUsefullVideoCardByIdPayload>) => {
         const { key, value, id } = actions.payload;

         const newCards = state.cards.map((card) => {
            if (card.id === id) {
               return { ...card, [key]: value };
            }
            return card;
         });

         state.cards = newCards;
      },
      saveUsefullVideoCards: (state, actions: PayloadAction<IVideoCardProps[]>) => {
         const newData = actions.payload;

         state.cards = newData;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(saveUsefullVideoCardsThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(saveUsefullVideoCardsThunk.fulfilled, (state) => {
            state.loading = false;
         })
         .addCase(saveUsefullVideoCardsThunk.rejected, (state) => {
            state.loading = false;
         })
         .addCase(deleteUsefullVideoCardByIdThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(deleteUsefullVideoCardByIdThunk.fulfilled, (state) => {
            state.loading = false;
         })
         .addCase(deleteUsefullVideoCardByIdThunk.rejected, (state) => {
            state.loading = false;
         })
         .addCase(saveUsefullVideoCardByIdThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(saveUsefullVideoCardByIdThunk.fulfilled, (state) => {
            state.loading = false;
         })
         .addCase(saveUsefullVideoCardByIdThunk.rejected, (state) => {
            state.loading = false;
         })
         .addCase(getUsefullVideoCardsThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(getUsefullVideoCardsThunk.fulfilled, (state, actions) => {
            const newCards = actions.payload;

            if (Array.isArray(newCards)) {
               state.cards = newCards;
            }
            state.loading = false;
         })
         .addCase(getUsefullVideoCardsThunk.rejected, (state) => {
            state.loading = false;
         });
   }
});

export const actionUsefullSlice = usefullSlice.actions;

export const selectorUsefull = (state: RootState) => state.usefull;

export default usefullSlice.reducer;
