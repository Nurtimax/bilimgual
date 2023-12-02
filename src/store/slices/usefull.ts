import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';

import { firestore } from '../../firebase';

import { RootState } from '.';

export interface IVideoCardProps {
   video: string;
   title: string;
   duration: number;
   isSaved: boolean;
   id: number;
}

interface InitialState {
   loading: boolean;
   cards: IVideoCardProps[];
}

export interface IChangeUsefullVideoCardByIdPayload {
   key: keyof IVideoCardProps;
   value: string;
   id: number;
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
         const usefullCards: IVideoCardProps[] = [];

         const querySnapshot = await getDocs(collection(firestore, 'usefullCards'));

         querySnapshot.forEach((doc) => {
            usefullCards.push({
               ...doc.data(),
               id: doc.id
            } as unknown as IVideoCardProps);
         });

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
         await setDoc(doc(firestore, 'usefullCards', `${Date.now()}`), data);

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
   async (id: number, { rejectWithValue, dispatch }) => {
      try {
         await deleteDoc(doc(firestore, 'usefullCards', `${id}`));

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
