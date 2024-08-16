export const isValidateEmail = (stringEmail) => {
	const regex = new RegExp("^\\w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$");
	return regex.test(stringEmail);
};
export const isValidatePassword = (stringPassword) => {
	return /[^\w][a-zA-Z-0-9]+{7}$/.test(stringPassword);
};
