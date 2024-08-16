const convertTime = (timer) => {
	let hour = Math.floor(timer / 60); // hour
	let minute = Math.floor(timer % 60); // minute
	if (hour && minute) return `${hour}h ${minute}mins`;
	else if (hour) return `${hour}h`;
	else return `${minute}mins`; // if hour is 0, only display minute
};

export default convertTime;
