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
import { useEffect, useState } from 'react';
import {
	auth,
	firebaseDatabase,
	createUserWithEmailAndPassword,
	firebaseDatabaseRef,
	firebaseSet,
	sendEmailVerification,
	child,
	get,
	onValue,
} from '../../firebase/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
const dbRef = firebaseDatabaseRef(firebaseDatabase);

function Chat(props) {
	const [userChats, setUserChats] = useState([
		// {
		// 	name: 'Alex',
		// 	url: 'https://randomuser.me/api/portraits/men/70.jpg',
		// 	message: 'Hello, how are you today?',
		// 	numberOfUnreadMessage: 5,
		// 	timeUnreadMessage: 10,
		// },
		// {
		// 	name: 'Ethan',
		// 	url: 'https://randomuser.me/api/portraits/men/60.jpg',
		// 	message: 'Hello, how are you today?',
		// 	numberOfUnreadMessage: 15,
		// 	timeUnreadMessage: 20,
		// },
		// {
		// 	name: 'Mary',
		// 	url: 'https://randomuser.me/api/portraits/men/50.jpg',
		// 	message: 'Hello, how are you today?',
		// 	numberOfUnreadMessage: 25,
		// 	timeUnreadMessage: 30,
		// },
		// {
		// 	name: 'Casandra',
		// 	url: 'https://randomuser.me/api/portraits/men/40.jpg',
		// 	message: 'Hello, how are you today?',
		// 	numberOfUnreadMessage: 35,
		// 	timeUnreadMessage: 40,
		// },
		// {
		// 	name: 'Lyse',
		// 	url: 'https://randomuser.me/api/portraits/men/30.jpg',
		// 	message: 'Hello, how are you today?',
		// 	numberOfUnreadMessage: 45,
		// 	timeUnreadMessage: 50,
		// },
		// {
		// 	name: 'Jack',
		// 	url: 'https://randomuser.me/api/portraits/men/20.jpg',
		// 	message: 'Hello, how are you today?',
		// 	numberOfUnreadMessage: 0,
		// 	timeUnreadMessage: 60,
		// },
		// {
		// 	name: 'Michael',
		// 	url: 'https://randomuser.me/api/portraits/men/10.jpg',
		// 	message: 'Hello, how are you today?',
		// 	numberOfUnreadMessage: 5,
		// 	timeUnreadMessage: 70,
		// },
		// {
		// 	name: 'David',
		// 	url: 'https://randomuser.me/api/portraits/men/15.jpg',
		// 	message: 'Hello, how are you today?',
		// 	numberOfUnreadMessage: 5,
		// 	timeUnreadMessage: 35,
		// },
		// {
		// 	name: 'Mira',
		// 	url: 'https://randomuser.me/api/portraits/men/35.jpg',
		// 	message: 'Hello, how are you today?',
		// 	numberOfUnreadMessage: 5,
		// 	timeUnreadMessage: 25,
		// },
		// {
		// 	name: 'John Smith',
		// 	url: 'https://randomuser.me/api/portraits/men/55.jpg',
		// 	message: 'Hello, how are you today?',
		// 	numberOfUnreadMessage: 0,
		// 	timeUnreadMessage: 0,
		// },
	]);
	const { navigation, route } = props;
	const { navigate, goBack } = navigation;
	// const { email, userId } = route.params;
	const userLogin = async () => {
		const res = await AsyncStorage.getItem('user');
		return JSON.parse(res);
	};

	useEffect(() => {
		onValue(
			firebaseDatabaseRef(firebaseDatabase, 'users'),
			async (snapshot) => {
				if (snapshot.exists()) {
					let snapshotObject = snapshot.val();
					let stringUser = await AsyncStorage.getItem('user');
					let myUserId = JSON.parse(stringUser).userId;
					let userData = Object.keys(snapshotObject)
						.map((eachKey) => {
							let eachObject = snapshotObject[eachKey];
							return {
								url: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
								name: eachObject.email,
								tokenKey: eachObject.accessToken,
								numberOfUnreadMessage: 0,
								timeUnreadMessage: 10,
								userId: eachKey,
							};
						})
						.filter((eachUser) => eachUser.userId !== myUserId);
					setUserChats([...userData]);
				} else {
					console.log('Not data available');
				}
			}
		);
	}, []);
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
				renderItem={({ item }, index) => {
					return (
						<ChatItem
							data={item}
							onPress={() =>
								navigate('Message', {
									name: item.name,
									url: item.url,
									userId: item.userId,
								})
							}
							key={index}
						/>
					);
				}}
				keyExtractor={(eachUser) => eachUser.name}
			/>
		</View>
	);
}

export default Chat;
