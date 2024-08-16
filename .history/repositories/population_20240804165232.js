import axios from 'axios';

async function population() {
	try {
		let res = await axios.get(
			'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
		);
	} catch (err) {
		throw 'Failed request';
	}
	return res.data ?? [];
}
export default population;
