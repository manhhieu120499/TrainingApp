export const isValidateEmail = (stringEmail) => {
	return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(stringEmail);
};
export const isValidatePassword = (stringPassword) => {
	return stringPassword.length >= 3;
};
export const isValidRetypePassword = (stringType, password) => {
	if (!isValidatePassword(stringType))
		return 'Length of password must be greater than third';
	if (password) {
		if (stringType !== 'password')
			return 'Password and Retype password must be the same';
	} else {
		return 'Please enter a password';
	}
};
