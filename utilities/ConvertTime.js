const convertTime = (timer) => {
	if (timer == 0) return ' ';
	let hour = Math.floor(timer / 60); // hour
	let minute = Math.floor(timer % 60); // minute
	if (hour && minute) return `${hour} h ${minute} mins ago`;
	else if (hour) return `${hour} h ago`;
	else return `${minute} mins ago`; // if hour is 0, only display minute
};

export default convertTime;
