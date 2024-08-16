import axios from 'axios';

const getUserDetail = async () => {
	try {
		let res = await axios.get('https://randomuser.me/api');
		if (res.status !== 200) throw 'Failed request';
		if (res.data.results.length > 0) {
			let responseUser = res.data.results[0];
			let user = {};
			user.dateOfBirth = new Date(responseUser.dob.date);
			user.email = responseUser.email;
			user.gender = responseUser.gender;
			user.userId = `${responseUser.id.name}${responseUser.id.value}`;
			user.address = `${responseUser.location.state}${responseUser.location.country}`;
			user.username = responseUser.login.username;
			user.avatar = responseUser.picture.large;
			return user;
		}
	} catch (err) {
		throw new Error(err);
	}
};

const login = ({ email, password }) => {};

export default {
	getUserDetail,
	login,
};
