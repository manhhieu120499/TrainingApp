import { useEffect } from 'react';

function SettingItem(props) {
	useEffect(() => console.log(props.data));

	return <View></View>;
}

export default SettingItem;
