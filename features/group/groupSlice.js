import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import groupService from './groupService';

const initialState = {
	data: null,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: '',
};

export const fetchGroup = createAsyncThunk(
	'group/fetch',
	async (data, thunkAPI) => {
		try {
			return await groupService.fetchGroup(data);
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const createGroup = createAsyncThunk(
	'group/create',
	async (data, thunkAPI) => {
		try {
			return await groupService.createGroup(data);
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const deleteGroup = createAsyncThunk(
	'group/create',
	async (data, thunkAPI) => {
		try {
			return await groupService.deleteGroup(data);
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const groupSlice = createSlice({
	name: 'group',
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
			.addCase(fetchGroup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchGroup.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data = action.payload;
			})
			.addCase(fetchGroup.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.data = null;
			});
	},
});

export const { reset } = groupSlice.actions;
export default groupSlice.reducer;
