import { configureStore } from '@reduxjs/toolkit';
import authReducer, { initUser } from '../features/auth/authSlice';
import groupsReducer from '../features/groups/groupsSlice';
import groupReducer from '../features/group/groupSlice';
import countryReducer from '../features/country/countrySlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		groups: groupsReducer,
		group: groupReducer,
		country: countryReducer,
	},
});

store.dispatch(initUser());

export default store;
