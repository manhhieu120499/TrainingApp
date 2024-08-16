import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Message(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View>
				<Icon name="chevron-left" size={15} color={'black'} />
			</View>
		</View>
	);
}

export default Message;
