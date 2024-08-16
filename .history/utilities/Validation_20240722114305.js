export const isValidateEmail = (stringEmail) => {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail);
};
export const isValidatePassword = (stringPassword) => {
	return /[^\w][a-zA-Z-0-9]+{7}$/.test(stringPassword);
};
