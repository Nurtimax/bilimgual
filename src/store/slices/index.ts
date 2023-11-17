import { combineReducers } from '@reduxjs/toolkit';

import { authenticationSlice } from './authentication-slice';
import adminUsers from './admin-users';
import adminCreateTeam from './admin-create-team';
import ourTeam from './our-team';

const rootReducer = combineReducers({
   auth: authenticationSlice.reducer,
   adminUsers: adminUsers,
   adminCreateTeam,
   ourTeam
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
