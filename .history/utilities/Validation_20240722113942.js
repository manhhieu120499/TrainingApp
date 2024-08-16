export const isValidateEmail = (stringEmail = " ") => {
	return /^[a-zA-Z0-9-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(stringEmail);
};
export const isValidatePassword = (stringPassword) => {
	return /[^\w][a-zA-Z-0-9]+{7}$/.test(stringPassword);
};
