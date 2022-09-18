import axios from 'axios';

const API_URL =
	'https://expense-app-backend-production.up.railway.app/api/groups/';

const fetchGroups = async () => {
	const res = await axios.get(API_URL + 'fetchall');
	return res.data;
};

const fetchGroup = async (data) => {
	const res = await axios.post(API_URL + 'fetch', data);
	return res.data;
};

const groupService = {
	fetchGroups,
	fetchGroup,
};

export default groupService;
