import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from './authService';

const initialState = {
	user: null,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: '',
};

export const register = createAsyncThunk(
	'auth/register',
	async (user, thunkAPI) => {
		try {
			console.log('Hello World');
			return await authService.register(user);
		} catch (err) {
			console.log('Hello Downside');
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	try {
		return await authService.login(user);
	} catch (err) {
		const message =
			(err.response && err.response.data && err.response.data.message) ||
			err.message ||
			err.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const logout = createAsyncThunk('auth/logout', async () => {
	console.log('Logging out');
	await authService.logout();
});

export const initUser = createAsyncThunk('auth/init', async () => {
	const res = await AsyncStorage.getItem('user');
	return (user = res != null ? JSON.parse(res) : null);
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(initUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				console.log('Reducer', action);
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
