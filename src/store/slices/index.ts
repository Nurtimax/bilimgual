import { combineReducers } from '@reduxjs/toolkit';

import { authenticationSlice } from './authentication-slice';
import adminUsers from './admin-users';
import ourTeam from './our-team';
import adminUsersChart from './admin-users-chart';

const rootReducer = combineReducers({
   auth: authenticationSlice.reducer,
   adminUsers: adminUsers,
   ourTeam,
   adminUsersChart
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
