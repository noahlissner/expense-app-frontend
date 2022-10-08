import { configureStore } from '@reduxjs/toolkit';
import authReducer, { initUser } from '../features/auth/authSlice';
import groupsReducer from '../features/groups/groupsSlice';
import countryReducer from '../features/country/countrySlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		groups: groupsReducer,
		country: countryReducer,
	},
});

store.dispatch(initUser());

export default store;
