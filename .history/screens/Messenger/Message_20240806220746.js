import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize } from '../../constants';
import MessageItem from './MessageItem';

function Message(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			{/**Header */}
			<View
				style={{
					height: 45,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingHorizontal: 15,
				}}
			>
				<Icon
					name="chevron-left"
					size={15}
					color={'black'}
					style={{ backgroundColor: 'white', padding: 10 }}
					onPress={() => alert('Click back')}
				/>
				<Text
					style={{
						fontSize: fontSize.h4,
						fontWeight: 'bold',
						color: 'black',
					}}
				>
					Amanda Weeler
				</Text>
				<Icon
					name="ellipsis-v"
					size={15}
					color={'black'}
					style={{ backgroundColor: 'white', padding: 10 }}
					onPress={() => alert('Click other')}
				/>
			</View>
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
						fontSize: fontSize.h6 * 0.8,
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
