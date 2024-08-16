import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize } from '../constants';

function Setting(props) {
	return (
		<View>
			<View
				style={{
					flex: 1,
					backgroundColor: 'red',
					height: 60,
					alignItems: 'center',
				}}
			>
				<Text style={{ fontSize: fontSize.h1, color: 'white' }}>
					Settings UI
				</Text>
			</View>
		</View>
	);
}

export default Setting;
