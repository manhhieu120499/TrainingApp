import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { fontSize } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function SettingItem(props) {
	useEffect(() => console.log(props.data));

	return (
		<View
			style={{
				flex: 1,
				paddingHorizontal: 10,
				height: 50,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				// backgroundColor: 'pink',
			}}
		>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Icon name="globe" size={20} />
				<Text style={{ fontSize: fontSize.h4, marginStart: 10 }}>
					Language
				</Text>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				{/* <Text style={{ fontSize: fontSize.h4, marginEnd: 10 }}>
							English
						</Text>
						<Icon name="chevron-right" size={15} /> */}
				<Icon name="toggle-on" size={35} color={'red'} />
			</View>
		</View>
	);
}

export default SettingItem;
