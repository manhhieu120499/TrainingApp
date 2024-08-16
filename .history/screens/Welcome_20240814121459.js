import React, { useEffect } from 'react';
import {
	Alert,
	Button,
	Image,
	ImageBackground,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { colors, images } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { UIButton } from '../components';
import { useState } from 'react';
import {
	auth,
	onAuthStateChanged,
	firebaseSet,
	firebaseDatabaseRef,
	firebaseDatabase,
} from '../firebase/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Welcome(props) {
	// state => when state change => UI reload
	const [accountType, setAccountType] = useState([
		{
			name: 'Badminton user',
			selected: true,
		},
		{
			name: 'Business',
			selected: false,
		},
		{
			name: 'Individual',
			selected: false,
		},
	]);

	const handleOnPressButton = (account) => {
		let newAccountType = accountType.map((thisAccount) => {
			return {
				...thisAccount,
				selected: account.name == thisAccount.name,
			};
		});
		setAccountType(newAccountType);
	};
	const stylesContainer = {
		backgroundColor: 'white',
		flex: 100,
	};

	// navigation
	const { navigation, route } = props;

	// function
	const { navigate, goBack } = navigation;

	useEffect(() => {
		onAuthStateChanged(auth, (responseUser) => {
			console.log(responseUser);
			if (responseUser) {
				// signed in
				// save account user to firebase
				let user = {
					userId: responseUser.uid,
					email: responseUser.email,
					emailVerified: responseUser.emailVerified,
					accessToken: responseUser.accessToken,
				};
				firebaseSet(
					firebaseDatabaseRef(
						firebaseDatabase,
						`users/${user.userId}`
					),
					user
				);
				// save account to local storage
				AsyncStorage.setItem('user', JSON.stringify(user.userId));
				navigate('UITab');
			}
		});
	});
	return (
		<View style={stylesContainer}>
			<ImageBackground
				source={images.background}
				resizeMethod="cover"
				style={{ flex: 100 }}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: 20,
						flex: 5,
					}}
				>
					<Text style={{ color: 'white', fontSize: 20 }}>
						🔥 BADMINTON_COMPANY.CO
					</Text>
					<Icon name={'question-circle'} size={20} color={'white'} />
				</View>
				{/**content */}
				<View style={{ flex: 60, width: '100%' }}>
					<View style={{ height: 110 }} />
					<View
						style={{
							height: 100,
							justifyContent: 'flex-start',
							alignItems: 'center',
						}}
					>
						<Text style={{ color: 'white', marginBottom: 5 }}>
							Welcome to
						</Text>
						<Text
							style={{
								color: 'white',
								marginBottom: 8,
								fontSize: 18,
								fontWeight: 'bold',
							}}
						>
							BADMINTON_COMPANY.CO !
						</Text>
						<Text style={{ color: 'white' }}>
							Please select your account type
						</Text>
					</View>
					<View
						style={{
							width: '100%',
							alignItems: 'center',
							marginTop: 20,
						}}
					>
						{accountType.map((account, index) => (
							<UIButton
								key={index}
								title={account.name}
								selected={account.selected}
								onPress={() => handleOnPressButton(account)}
							/>
						))}
					</View>
				</View>
				{/** footer */}
				<View
					style={{
						flex: 25,
						width: '100%',
						alignItems: 'center',
						marginTop: 10,
					}}
				>
					<UIButton
						title={'LOGIN'.toUpperCase()}
						onPress={() => navigate('Login')}
					/>
					<Text style={{ color: 'white', marginTop: 15 }}>
						Want to register new Account ?
					</Text>
					<Text
						style={{
							color: '#FE6A00',
							marginTop: 8,
							textDecorationLine: 'underline',
						}}
						onPress={() => navigate('Register')}
					>
						Register
					</Text>
				</View>
			</ImageBackground>
		</View>
	);
}

export default Welcome;
