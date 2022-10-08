import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL =
	'https://expense-app-backend-production.up.railway.app/api/groups/';

const getToken = async () => {
	const res = await AsyncStorage.getItem('user');
	const user = JSON.parse(res);
	return user.token;
};

const fetchGroup = async (data) => {
	const config = {
		headers: {
			authorization: `Bearer ${await getToken()}`,
		},
	};

	const res = await axios.post(API_URL + 'fetch', data, config);
	return res.data;
};

const createGroup = async (data) => {
	const config = {
		headers: {
			authorization: `Bearer ${await getToken()}`,
		},
	};

	const res = await axios.post(API_URL + 'create', data, config);
	return res.data;
};

const deleteGroup = async (data) => {
	const config = {
		headers: {
			authorization: `Bearer ${await getToken()}`,
		},
	};

	const res = await axios.post(API_URL + 'delete', data, config);
	return res.data;
};

const groupService = {
	fetchGroup,
	createGroup,
	deleteGroup,
};

export default groupService;
