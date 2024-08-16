import moment from 'moment';

const convertDateToString = (date) => {
	return moment(date).format('YYYY-MM-DD');
};

export default convertDateToString;
