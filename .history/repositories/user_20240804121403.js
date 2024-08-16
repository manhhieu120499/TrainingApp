import axios from 'axios';

const getUserDetail = async () => {
	try {
		let res = await axios.get('https://randomuser.me/api');
		alert(res.data.results);
		return res.data;
	} catch (err) {
		throw new Error(err);
	}
};

const login = ({ email, password }) => {};

export default {
	getUserDetail,
	login,
};
