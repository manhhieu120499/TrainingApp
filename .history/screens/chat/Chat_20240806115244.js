import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ScrollView,
	FlatList,
} from 'react-native';
import { colors, fontSize } from '../../constants';
import { UIHeader } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ChatItem from './ChatItem';
import { useState } from 'react';

function Chat(props) {
	const [userChats, setUserChats] = useState([
		{
			name: 'Alex',
			url: 'https://randomuser.me/api/portraits/men/70.jpg',
			message: 'Hello, how are you today?',
			numberOfUnreadMessage: 5,
		},
		{
			name: 'Ethan',
			url: 'https://randomuser.me/api/portraits/men/60.jpg',
			message: 'Hello, how are you today?',
			numberOfUnreadMessage: 15,
		},
		{
			name: 'Mary',
			url: 'https://randomuser.me/api/portraits/men/50.jpg',
			message: 'Hello, how are you today?',
			numberOfUnreadMessage: 25,
		},
		{
			name: 'Casandra',
			url: 'https://randomuser.me/api/portraits/men/40.jpg',
			message: 'Hello, how are you today?',
			numberOfUnreadMessage: 35,
		},
		{
			name: 'Lyse',
			url: 'https://randomuser.me/api/portraits/men/30.jpg',
			message: 'Hello, how are you today?',
			numberOfUnreadMessage: 45,
		},
		{
			name: 'Jack',
			url: 'https://randomuser.me/api/portraits/men/20.jpg',
			message: 'Hello, how are you today?',
			numberOfUnreadMessage: 0,
		},
		{
			name: 'Michael',
			url: 'https://randomuser.me/api/portraits/men/10.jpg',
			message: 'Hello, how are you today?',
			numberOfUnreadMessage: 5,
		},
		{
			name: 'David',
			url: 'https://randomuser.me/api/portraits/men/15.jpg',
			message: 'Hello, how are you today?',
			numberOfUnreadMessage: 5,
		},
		{
			name: 'Mira',
			url: 'https://randomuser.me/api/portraits/men/35.jpg',
			message: 'Hello, how are you today?',
			numberOfUnreadMessage: 5,
		},
		{
			name: 'John Smith',
			url: 'https://randomuser.me/api/portraits/men/55.jpg',
			message: 'Hello, how are you today?',
			numberOfUnreadMessage: 0,
		},
	]);
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<UIHeader
				title={'Notifications'}
				leftIcon={'chevron-left'}
				rightIcon={'search'}
			/>
			<View
				style={{
					height: 40,
					backgroundColor: 'yellow',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingHorizontal: 10,
					backgroundColor: '#ddd',
				}}
			>
				<Text style={{ fontSize: fontSize.h6, color: colors.viewer }}>
					6 messages unread
				</Text>
				<Icon name="trash" size={15} color={'gray'} />
			</View>
			<FlatList
				data={userChats}
				renderItem={({ item }) => {
					return <ChatItem data={item} />;
				}}
				keyExtractor={(eachUser) => eachUser.url}
			/>
		</View>
	);
}

export default Chat;
