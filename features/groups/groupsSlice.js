import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import groupsService from './groupsService';

const initialState = {
	data: null,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: '',
};

export const fetchGroups = createAsyncThunk(
	'group/fetchall',
	async (_, thunkAPI) => {
		try {
			return await groupsService.fetchGroups();
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const groupsSlice = createSlice({
	name: 'groups',
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
			.addCase(fetchGroups.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchGroups.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data = action.payload;
			})
			.addCase(fetchGroups.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.data = null;
			});
	},
});

export const { reset } = groupsSlice.actions;
export default groupsSlice.reducer;
