import axios from 'axios';

const getUserDetail = async () => {
	try {
		let res = await axios.get('https://randomuser.me/api');
	} catch (err) {
		throw new Error(err);
	}
};

const login = ({ email, password }) => {};

export default {
	getUserDetail,
	login,
};
