import { View, Text, TouchableOpacity, Image } from 'react-native';
import { colors, fontSize } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';

function ChatItem(props) {
	const [userChats, setUserChats] = useState([
		{
			name: 'Alex',
			url: 'https://randomuser.me/api/portraits/men/70.jpg',
			message: 'Hello, how are you today?',
			timeRecently: '5 mins ago',
		},
		{
			name: 'Ethan',
			url: 'https://randomuser.me/api/portraits/men/60.jpg',
			message: 'Hello, how are you today?',
			timeRecently: '5 mins ago',
		},
		{
			name: 'Mary',
			url: 'https://randomuser.me/api/portraits/men/50.jpg',
			message: 'Hello, how are you today?',
			timeRecently: '5 mins ago',
		},
		{
			name: 'Casandra',
			url: 'https://randomuser.me/api/portraits/men/40.jpg',
			message: 'Hello, how are you today?',
			timeRecently: '5 mins ago',
		},
		{
			name: 'Lyse',
			url: 'https://randomuser.me/api/portraits/men/30.jpg',
			message: 'Hello, how are you today?',
			timeRecently: '5 mins ago',
		},
		{
			name: 'Jack',
			url: 'https://randomuser.me/api/portraits/men/20.jpg',
			message: 'Hello, how are you today?',
			timeRecently: '5 mins ago',
		},
		{
			name: 'Michael',
			url: 'https://randomuser.me/api/portraits/men/10.jpg',
			message: 'Hello, how are you today?',
			timeRecently: '5 mins ago',
		},
		{
			name: 'David',
			url: 'https://randomuser.me/api/portraits/men/15.jpg',
			message: 'Hello, how are you today?',
			timeRecently: '5 mins ago',
		},
		{
			name: 'Mira',
			url: 'https://randomuser.me/api/portraits/men/35.jpg',
			message: 'Hello, how are you today?',
			timeRecently: '5 mins ago',
		},
		{
			name: 'John Smith',
			url: 'https://randomuser.me/api/portraits/men/55.jpg',
			message: 'Hello, how are you today?',
			timeRecently: '5 mins ago',
		},
	]);
	return (
		<TouchableOpacity
			style={{
				flexDirection: 'row',
				height: 80,
				backgroundColor: 'white',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingHorizontal: 10,
				borderBottomWidth: 1,
				borderBottomColor: '#ccc',
			}}
		>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View style={{ position: 'relative' }}>
					<Image
						source={{
							uri: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
						}}
						width={60}
						height={60}
						resizeMode="cover"
						borderRadius={40}
					/>
					<Text
						style={{
							width: 20,
							height: 20,
							backgroundColor: 'red',
							borderRadius: 10,
							textAlign: 'center',
							position: 'absolute',
							top: 0,
							right: -5,
							color: 'white',
						}}
					>
						10
					</Text>
				</View>

				<View style={{ marginStart: 15 }}>
					<Text
						style={{
							fontSize: fontSize.h3,
							fontWeight: 'bold',
							color: 'black',
							marginBottom: 2,
						}}
					>
						Alex
					</Text>
					<Text style={{ fontSize: fontSize.h5, color: '#333' }}>
						Today is good for you
					</Text>
				</View>
			</View>
			<Text style={{ fontSize: fontSize.h5 }}>5 mins ago</Text>
		</TouchableOpacity>
	);
}

export default ChatItem;
