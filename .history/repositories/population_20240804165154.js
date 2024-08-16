import axios from 'axios';

async function population() {
	let res = await axios.get(
		'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
	);
	return res.data ?? [];
}
export default population;
