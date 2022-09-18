import { configureStore } from '@reduxjs/toolkit';
import authReducer, { initUser } from '../features/auth/authSlice';
import groupReducer from '../features/groups/groupSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		groups: groupReducer,
	},
});

store.dispatch(initUser());

export default store;
