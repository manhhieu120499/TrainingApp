import axios from 'axios';

const getUserDetail = async () => {
	try {
		let res = await axios.get('https://randomuser.me/api');
		return res.data.results[0];
	} catch (err) {
		throw new Error(err);
	}
};

const login = ({ email, password }) => {};

export default {
	getUserDetail,
	login,
};
