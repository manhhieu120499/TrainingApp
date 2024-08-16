import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize } from '../../constants';
import MessageItem from './MessageItem';
import { UIHeader } from '../../components';
import { useState } from 'react';

function Message(props) {
	const [messages, setMessages] = useState([{}]);
	const { user } = props;
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			{/**Header */}
			<UIHeader
				title={'Amanda Weeler'}
				leftIcon={'chevron-left'}
				rightIcon={'ellipsis-v'}
				onPressLeftIcon={() => alert('Click back')}
				onPressRightIcon={() => alert('Click other')}
			/>
			{/** body */}
			<View
				style={{
					flex: 1,
					backgroundColor: '#ccc',
					paddingHorizontal: 15,
				}}
			>
				<Text
					style={{
						textAlign: 'center',
						fontSize: fontSize.h5 * 0.8,
						marginVertical: 10,
					}}
				>
					Jun 5
				</Text>
				<MessageItem index={0} />
				<MessageItem index={1} />
				<MessageItem index={2} />
				<MessageItem index={3} />
			</View>
		</View>
	);
}

export default Message;
