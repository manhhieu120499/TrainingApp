import axios from 'axios';

const getUserDetail = async () => {
	const res = await axios.get('https://randomuser.me/api');
	return res.data.results;
};

const login = ({ email, password }) => {};

export default {
	getUserDetail,
	login,
};
