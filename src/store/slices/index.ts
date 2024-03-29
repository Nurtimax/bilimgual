import { combineReducers } from '@reduxjs/toolkit';

import { authenticationSlice } from './authentication-slice';
import adminUsers from './admin-users';
import ourTeam from './our-team';
import adminUsersChart from './admin-users-chart';
import githubGraph from './github-graph';
import sliders from './sliders';
import usefull from './usefull';
import adminTest from './admin-test';

const rootReducer = combineReducers({
   auth: authenticationSlice.reducer,
   adminUsers: adminUsers,
   ourTeam,
   adminUsersChart,
   githubGraph,
   sliders,
   usefull,
   adminTest
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
