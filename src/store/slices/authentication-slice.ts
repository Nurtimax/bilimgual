import { createSlice } from '@reduxjs/toolkit';

const authenticationSlice = createSlice({
   name: 'auth',
   initialState: {},
   reducers: {}
});

const actionAuthentication = authenticationSlice.actions;

export { authenticationSlice, actionAuthentication };
