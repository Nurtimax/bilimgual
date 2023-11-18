import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import axios from 'axios';

import { ITeamImageCard } from '../../types/team';
import { SOCIAL_ICONS, SOCIAL_ICONS_KEYS } from '../../utils/constants/icons';
import { FIREBASE_REALTIME_URL } from '../../utils/constants/_api';

import { RootState } from '.';

const name = 'adminCreateTeam';

interface InitialState {
   forms: ITeamImageCard;
   isByIdForms: boolean;
   loading: boolean;
}

interface IChangeValueWithKeyPayload {
   key: string;
   value: string;
}

interface IChangeSocialValueByIdPayload {
   value: string;
   id: string;
}

const initialState: InitialState = {
   forms: {
      staticImage: '',
      borderRadius: '1px 1px 1px 20px',
      socials: [],
      id: 0,
      fullName: '',
      email: '',
      phoneNumber: '',
      country: '',
      stateRegion: '',
      city: '',
      address: '',
      zipCode: '',
      company: '',
      role: '',
      position: '',
      profileBackground: ''
   },
   isByIdForms: false,
   loading: false
};

export const createNewTeam = createAsyncThunk(`${name}/createNewTeam`, async (_, { rejectWithValue, getState }) => {
   try {
      const state = getState() as RootState;

      if (state?.adminCreateTeam) {
         const forms = state?.adminCreateTeam.forms;

         const docData = {
            ...forms,
            socials: forms.socials.map((el) => ({ ...el, icon: el.id })),
            dateExample: Timestamp.fromDate(new Date('December 10, 1815'))
         };

         await axios.post(`${FIREBASE_REALTIME_URL}/teams.json`, docData);
      } else {
         toast.warn('Sorry. Something wrong with form fields');
      }
   } catch (error) {
      if (error instanceof Error) {
         toast.error(error.message);
      }
      return rejectWithValue(error);
   }
});

const adminCreateTeam = createSlice({
   name,
   initialState,
   reducers: {
      changeValueWithKey: (state, actions: PayloadAction<IChangeValueWithKeyPayload>) => {
         const { key, value } = actions.payload;

         if (key in state.forms) {
            state.forms = { ...state.forms, [key]: value };
         } else {
            if (SOCIAL_ICONS_KEYS.includes(key)) {
               const socialsValue = [...state.forms.socials];
               const foundSocial = socialsValue.find((social) => social.id === key);

               if (foundSocial) {
                  const updatedSocials = socialsValue.map((el) => (el.id === key ? { ...el, link: value } : el));
                  state.forms.socials = updatedSocials;
               } else {
                  if (key in SOCIAL_ICONS) {
                     state.forms.socials.push({
                        id: key,
                        icon: key,
                        link: value,
                        socialColor: ''
                     });
                  }
               }
            }
         }
      },
      changeSocialValueById: (state, actions: PayloadAction<IChangeSocialValueByIdPayload>) => {
         const { id, value } = actions.payload;

         const socials = state.forms.socials;

         const newSocials = socials.map((el) => {
            if (el.id === id) {
               return {
                  ...el,
                  socialColor: value
               };
            }
            return el;
         });

         state.forms.socials = newSocials;
      },
      resetForms: (state) => {
         state.forms = initialState.forms;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(createNewTeam.fulfilled, (state) => {
            state.loading = false;
         })
         .addCase(createNewTeam.rejected, (state) => {
            state.loading = false;
         })
         .addCase(createNewTeam.pending, (state) => {
            state.loading = true;
         });
   }
});

export const actionAdminCreateTeam = adminCreateTeam.actions;

export default adminCreateTeam.reducer;
