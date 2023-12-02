import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { ITeamImageCard } from '../../types/team';
import axiosInctanse from '../../utils/helpers/axiosInstance';
import { ISocialIcons, SOCIAL_ICONS, SOCIAL_ICONS_KEYS, socialHoverColors } from '../../utils/constants/icons';

import { RootState } from '.';

export type TOurTeamSliceActions = 'edit' | 'create';

interface InitialState {
   teams: ITeamImageCard[];
   loading: boolean;
   actions: TOurTeamSliceActions;
   team: ITeamImageCard;
}

export type IRemoveOurTeamByIdThunk = Pick<ITeamImageCard, 'id' | 'fullName'>;
export type IGetOurTeamByIdThunk = Pick<ITeamImageCard, 'id'>;

interface IChangeValueWithKeyPayload {
   key: string;
   value: string;
}

interface IChangeSocialValueByIdPayload {
   value: string;
   id: string;
}

const name = 'our_team';

const initialState: InitialState = {
   teams: [],
   team: {
      staticImage: '',
      borderRadius: '',
      socials: [],
      id: '',
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
   loading: false,
   actions: 'create'
};

export const getOurTeamThunk = createAsyncThunk(`${name}/getOurTeamThunk`, async (_, { rejectWithValue }) => {
   try {
      const response = await axiosInctanse.get('teams.json', {
         params: {
            _limit: 5
         }
      });

      if (response.data) {
         const teams = Object.keys(response.data).map((key) => ({ ...response.data[key], id: key }));

         return teams;
      }

      return [];
   } catch (error) {
      if (error instanceof Error) {
         toast.error(error.message);
      }
      return rejectWithValue(error);
   }
});

export const removeOurTeamByIdThunk = createAsyncThunk(
   `${name}/removeOurTeamByIdThunk`,
   async ({ id, fullName }: IRemoveOurTeamByIdThunk, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInctanse.delete(`teams/${id}.json`);

         if (response.status === 200) {
            dispatch(getOurTeamThunk());
            toast.success(`${fullName} is successfuly deleted`);
         }
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

export const getOurTeamByIdThunk = createAsyncThunk(
   `${name}/getOurTeamByIdThunk`,
   async ({ id }: IGetOurTeamByIdThunk, { rejectWithValue }) => {
      try {
         const response = await axiosInctanse.get(`teams/${id}.json`);

         return response.data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

export const putOurTeamByIdThunk = createAsyncThunk(
   `${name}/getOurTeamByIdThunk`,
   async ({ id }: IGetOurTeamByIdThunk, { rejectWithValue, getState }) => {
      try {
         const state = getState() as RootState;

         const data = state.ourTeam.team;

         const response = await axiosInctanse.put(`teams/${id}.json`, data);

         return response.data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

export const createNewTeam = createAsyncThunk(`${name}/createNewTeam`, async (_, { rejectWithValue, getState }) => {
   try {
      const state = getState() as RootState;

      if (state?.ourTeam) {
         const forms = state?.ourTeam.team;

         const docData = {
            ...forms,
            socials: forms.socials.map((el) => ({ ...el, icon: el.id })),
            createdAt: new Date()
         };

         await axiosInctanse.post(`teams.json`, docData);
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

const ourTeamSlice = createSlice({
   name,
   initialState,
   reducers: {
      changeValueWithKey: (state, actions: PayloadAction<IChangeValueWithKeyPayload>) => {
         const { key, value } = actions.payload;

         if (key in state.team) {
            state.team = { ...state.team, [key]: value };
         } else {
            if (SOCIAL_ICONS_KEYS.includes(key)) {
               const socialsValue = [...state.team.socials];
               const foundSocial = socialsValue.find((social) => social.id === key);

               if (foundSocial) {
                  if (value) {
                     const updatedSocials = socialsValue.map((el) => (el.id === key ? { ...el, link: value } : el));
                     state.team.socials = updatedSocials;
                  } else {
                     const updatedSocials = socialsValue.filter((social) => social.id !== key);
                     state.team.socials = updatedSocials;
                  }
               } else {
                  if (key in SOCIAL_ICONS) {
                     state.team.socials.push({
                        id: key,
                        icon: key,
                        link: value,
                        socialColor: socialHoverColors(key as keyof ISocialIcons)
                     });
                  }
               }
            }
         }
      },
      changeSocialValueById: (state, actions: PayloadAction<IChangeSocialValueByIdPayload>) => {
         const { id, value } = actions.payload;

         const socials = state.team.socials;

         const newSocials = socials.map((el) => {
            if (el.id === id) {
               return {
                  ...el,
                  socialColor: value
               };
            }
            return el;
         });

         state.team.socials = newSocials;
      },
      resetForms: (state) => {
         state.team = initialState.team;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(getOurTeamThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(getOurTeamThunk.fulfilled, (state, actions) => {
            const value = actions.payload;

            state.teams = value;

            state.loading = false;
         })
         .addCase(getOurTeamThunk.rejected, (state) => {
            state.loading = false;
         })
         .addCase(getOurTeamByIdThunk.pending, (state) => {
            state.loading = true;
         })
         .addCase(getOurTeamByIdThunk.fulfilled, (state, actions) => {
            const value = actions.payload;

            if (value) {
               state.team = value;
               state.actions = 'edit';
            }
            state.loading = false;
         })
         .addCase(getOurTeamByIdThunk.rejected, (state) => {
            state.loading = false;
         })
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

export const actionOurTeam = ourTeamSlice.actions;
export const selectorOurTeam = (state: RootState) => state.ourTeam;

export default ourTeamSlice.reducer;
