import axios from 'axios';

async function getPopulation() {
	try {
		let res = await axios.get(
			'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
		);
		console.log(res.data);
		return res.data ?? [];
	} catch (err) {
		throw 'Failed request';
	}
}
export default getPopulation;
