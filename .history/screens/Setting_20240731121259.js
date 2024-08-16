import { SectionList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize } from '../constants';

function Setting(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View
				style={{
					backgroundColor: 'red',
					height: 60,
					justifyContent: 'center',
					paddingHorizontal: 10,
				}}
			>
				<Text
					style={{
						fontSize: fontSize.h2,
						color: 'white',
						fontWeight: 'bold',
					}}
				>
					Settings UI
				</Text>
			</View>
			<View style={{ flex: 1, backgroundColor: 'green' }}>
				<SectionList />
			</View>
		</View>
	);
}

export default Setting;
