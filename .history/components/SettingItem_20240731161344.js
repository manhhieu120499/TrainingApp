import { useEffect } from 'react';

function SettingItem(props) {
	let { title, item } = props.data;
	useEffect(() => console.log(title, item));

	return <View></View>;
}

export default SettingItem;
