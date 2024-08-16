import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize } from '../../constants';

function Message(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			{/**Header */}
			<View style={{ height: 60 }}>
				<Icon name="chevron-left" size={15} color={'black'} />
				<Text>Amanda Weeler</Text>
				<Icon name="ellipsis-v" size={15} color={'black'} />
			</View>
			{/** body */}
			<View style={{ flex: 1, backgroundColor: '#ccc' }}>
				<Text
					style={{ textAlign: 'center', fontSize: fontSize.h6 * 0.8 }}
				>
					Jun 5
				</Text>
			</View>
		</View>
	);
}

export default Message;
