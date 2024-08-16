export const isValidateEmail = (stringEmail) => {
	return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(stringEmail);
};
export const isValidatePassword = (stringPassword) => {
	return stringPassword.length() >= 3;
};
