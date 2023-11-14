import { createSlice } from '@reduxjs/toolkit';

import { ITeamImageCard } from '../../types/team';

const name = 'adminCreateTeam';

interface InitialState {
   forms: ITeamImageCard;
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
   reducers: {},
   extraReducers: () => {}
});

export const actionAdminCreateTeam = adminCreateTeam.actions;

export default adminCreateTeam.reducer;
