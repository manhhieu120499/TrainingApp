import axios from 'axios';

async function getPopulation() {
	try {
		let res = await axios.get(
			'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
		);
		return res.data ?? [];
	} catch (err) {
		throw 'Failed request';
	}
}
export default getPopulation;
