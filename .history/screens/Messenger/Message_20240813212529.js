import {
	View,
	Text,
	FlatList,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
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
					showUrl: true,
					content: 'How was your flight?',
					isSender: true,
					timestamp: '1722998976',
				},
				{
					url: url,
					showUrl: true,
					content: 'It was good. I flew to LA on time.',
					isSender: false,
					timestamp: '1722999036',
				},
				{
					url: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
					showUrl: true,
					content: `Let's go out`,
					isSender: true,
					timestamp: '1722999216',
				},
				{
					url: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
					showUrl: false,
					content: `We'll go to the Ho Chi Minh Museum We'll go to the Ho Chi Minh Museum`,
					isSender: true,
					timestamp: '1722999230',
				},
				{
					url: url,
					showUrl: true,
					content: `It's okay`,
					isSender: false,
					timestamp: '1722999276',
				},
			],
		},
		{
			time: 'Jun 9',
			messageChat: [
				{
					url: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
					showUrl: true,
					content: 'Are you free today?',
					isSender: true,
					timestamp: '1723171836',
				},
				{
					url: url,
					showUrl: true,
					content: 'I think that free today I think that free today',
					isSender: false,
					timestamp: '1723171956',
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
				<FlatList
					data={messages}
					renderItem={({ item: eachMessage }) => (
						<View
							style={{
								paddingHorizontal: 15,
							}}
							key={eachMessage.time}
						>
							<Text
								style={{
									textAlign: 'center',
									fontSize: fontSize.h5 * 0.8,
									marginVertical: 5,
								}}
							>
								{eachMessage.time}
							</Text>
							<FlatList
								data={eachMessage.messageChat}
								renderItem={({ item }) => (
									<MessageItem
										data={{
											item,
										}}
									/>
								)}
								keyExtractor={(message) => message.content}
							/>
						</View>
					)}
					keyExtractor={(message) => message.time}
				/>
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
				<TouchableOpacity
					style={{ flex: 1, justifyContent: 'center' }}
					onPress={() => alert('Send message')}
				>
					<Icon
						name="paper-plane"
						size={25}
						onPress={() => alert('Send message')}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Message;
