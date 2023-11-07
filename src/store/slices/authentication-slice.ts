import { createSlice } from '@reduxjs/toolkit';

import { IReduxAuthInitialState } from '../../types/auth';

const name = 'auth';
const initialState: IReduxAuthInitialState = {
   fields: {
      email: '',
      password: ''
   }
};

const authenticationSlice = createSlice({
   name,
   initialState,
   reducers: {
      authUserSave: (state, actions) => {
         const value = actions.payload;

         state.fields = value;
      }
   }
});

const actionAuthentication = authenticationSlice.actions;

export { authenticationSlice, actionAuthentication };
