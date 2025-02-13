import { View, Text, FlatList, TextInput, ScrollView } from 'react-native';
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
					url: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
					content: 'How was your flight?',
					isSender: true,
				},
				{
					url: url,
					content: 'It was good. I flew to LA on time.',
					isSender: false,
				},
			],
		},
		{
			time: 'Jun 9',
			messageChat: [
				{
					url: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
					content: 'Are you free today?',
					isSender: true,
				},
				{
					url: url,
					content: 'I think that free today',
					isSender: false,
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
			<View style={{ flex: 1, backgroundColor: '#ccc' }}>
				{messages.length > 0 &&
					messages.map((eachMessage, index) => (
						<View
							style={{
								paddingHorizontal: 15,
							}}
							key={index}
						>
							<Text
								style={{
									textAlign: 'center',
									fontSize: fontSize.h5 * 0.8,
									marginVertical: 10,
								}}
							>
								{eachMessage.time}
							</Text>
							<FlatList
								data={eachMessage.messageChat}
								renderItem={({ item, index }) => (
									<MessageItem data={{ item, index }} />
								)}
								keyExtractor={(message) => message.content}
							/>
						</View>
					))}
			</View>
			<View
				style={{
					height: 50,
					flexDirection: 'row',
					alignItems: 'center',
					backgroundColor: '#ccc',
				}}
			>
				<View
					style={{
						backgroundColor: 'white',
						width: '85%',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingHorizontal: 10,
						height: '100%',
					}}
				>
					<TextInput placeholder="Write your message..." />
					<Icon name="smile" size={20} />
				</View>
				<Icon
					name="paper-plane"
					size={25}
					style={{ flex: 1, textAlign: 'center' }}
					onPress={() => alert('Send message')}
				/>
			</View>
		</View>
	);
}

export default Message;
