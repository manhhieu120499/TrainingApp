import { View, Text } from 'react-native';
import { colors, fontSize } from '../../constants';
import { UIHeader } from '../../components';

function Chat(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<UIHeader title={'Notifications'} />
			<Text style={{ fontSize: fontSize.h3 }}>This is chat</Text>
		</View>
	);
}

export default Chat;
