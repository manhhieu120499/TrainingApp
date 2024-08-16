import { View, Text } from 'react-native';
import { colors, fontSize } from '../../constants';
import { UIHeader } from '../../components';

function Chat(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<UIHeader
				title={'Notifications'}
				leftIcon={'chevron-left'}
				rightIcon={'search'}
			/>
			<View>
				<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
					6 messages unread
				</Text>
				<Icon name="garbage" />
			</View>
		</View>
	);
}

export default Chat;
