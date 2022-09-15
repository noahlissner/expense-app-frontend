import { configureStore } from '@reduxjs/toolkit';
import authReducer, { initUser } from '../features/auth/authSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

store.dispatch(initUser());

export default store;
