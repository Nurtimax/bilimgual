import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ITeamImageCard } from '../../types/team';
import { ISocialIcons, SOCIAL_ICONS, SOCIAL_ICONS_KEYS } from '../../utils/constants/icons';

const name = 'adminCreateTeam';

interface InitialState {
   forms: ITeamImageCard;
}

interface IChangeValueWithKeyPayload {
   key: string;
   value: string;
}

const initialState: InitialState = {
   forms: {
      staticImage: '',
      borderRadius: '',
      name: '',
      figCaption: '',
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
      role: ''
   }
};

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
                        icon: SOCIAL_ICONS?.[key as keyof ISocialIcons],
                        link: value
                     });
                  }
               }
            }
         }
      }
   },
   extraReducers: () => {}
});

export const actionAdminCreateTeam = adminCreateTeam.actions;

export default adminCreateTeam.reducer;
