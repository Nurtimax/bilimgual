import { combineReducers } from "@reduxjs/toolkit";
import { authenticationSlice } from "./authentication-slice";

const rootReducer = combineReducers({
  auth: authenticationSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
