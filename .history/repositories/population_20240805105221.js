import axios from 'axios';

async function getPopulation({ drillDown, measures }) {
	const urlGetPopulation = `https://datausa.io/api/data?drilldowns=${drillDown}&measures=${measures}`;
	let result = [];
	try {
		let res = await axios.get(urlGetPopulation);
		res.data !== undefined &&
			res.data.data.forEach((item) => {
				let obj = {};
				obj.nationId = item['ID Nation'];
				obj.nationName = item['Nation'];
				obj.year = item['Year'];
				obj.population = item['Population'];
				result.push(obj);
			});
		return result;
	} catch (err) {
		throw 'Failed request';
	}
}
export { getPopulation };
