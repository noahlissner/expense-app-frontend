import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL =
	'https://expense-app-backend-production.up.railway.app/api/groups/';

const getToken = async () => {
	const res = await AsyncStorage.getItem('user');
	const user = JSON.parse(res);
	return user.token;
};

const fetchGroups = async () => {
	const token = await getToken();
	const config = {
		headers: {
			authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.get(API_URL + 'fetchall', config);
	return res.data;
};

const groupsService = {
	fetchGroups,
};

export default groupsService;
