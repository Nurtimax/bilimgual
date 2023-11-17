import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { ITeamImageCard } from '../../types/team';
import { SOCIAL_ICONS, SOCIAL_ICONS_KEYS } from '../../utils/constants/icons';
import { firestore } from '../../firebase';

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
   socialColor?: string;
}

interface IChangeSocialValueByIdPayload {
   value: string;
   id: string;
}

const initialState: InitialState = {
   forms: {
      staticImage: '',
      borderRadius: '1px 1px 1px 20px',
      name: 'asdf',
      figCaption: 'asdfasdf',
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
      position: ''
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

         await addDoc(collection(firestore, 'team'), docData);
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
         const { key, value, socialColor } = actions.payload;

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
                        socialColor: socialColor || ''
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
