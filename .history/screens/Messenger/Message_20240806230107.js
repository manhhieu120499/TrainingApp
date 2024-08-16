import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize } from '../../constants';
import MessageItem from './MessageItem';
import { UIHeader } from '../../components';
import { useState } from 'react';

function Message(props) {
	const { navigation, route } = props;
	const { navigate, goBack } = navigation;
	const { name, url } = route.params;
	const [messages, setMessages] = useState([
		{
			time: 'Jun 5',
			messageChat: [
				{
					url: url,
					content: 'How was your flight?',
				},
			],
		},
	]);

	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			{/**Header */}
			<UIHeader
				title={name}
				leftIcon={'chevron-left'}
				rightIcon={'ellipsis-v'}
				onPressLeftIcon={() => goBack('Chat')}
				onPressRightIcon={() => alert('Click other')}
			/>
			{/** body */}

			<MessageItem index={0} data={{ name, url }} />
			{/* <MessageItem index={1} /> */}
			<MessageItem index={2} data={{ name, url }} />
			{/* <MessageItem index={3} /> */}
		</View>
	);
}

export default Message;
