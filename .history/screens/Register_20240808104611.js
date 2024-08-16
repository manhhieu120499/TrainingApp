import React, { useEffect, useRef, useState } from 'react';
import {
	Text,
	ImageBackground,
	View,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSize, images } from '../constants';
import {
	isValidateEmail,
	isValidatePassword,
	isValidRetypePassword,
} from '../utilities';
import {
	auth,
	firebaseDatabase,
	createUserWithEmailAndPassword,
} from '../firebase/firebaseConfig';

function Register(props) {
	const [showPassword, setShowPassword] = useState(true);
	const [showRetypePassword, setShowRetypePassword] = useState(true);
	const [isSelected, setSelected] = useState(false);

	// state for register
	const [email, setEmail] = useState('trungtran123@gmail.com');
	const [password, setPassword] = useState('1234567');
	const [retypePassword, setRetypePassword] = useState('1234567');
	const [info, setInfo] = useState({
		password: '',
		email: '',
	});
	const [keyBoardIsShow, setKeyBoardIsShow] = useState(false);

	//state for validate
	const [errorEmail, setErrorEmail] = useState('');
	const [errorPassword, setErrorPassword] = useState('');
	const [errorRetypePassword, setErrorRetypePassword] = useState('');
	const isValidEmailAndPassword =
		isValidateEmail(email) && isValidatePassword(password);

	useEffect(() => {
		const xx = auth;
		// componentDidMount
		Keyboard.addListener('keyboardDidShow', () => {
			setKeyBoardIsShow(true);
		});
		Keyboard.addListener('keyboardDidHide', () => {
			setKeyBoardIsShow(false);
		});
	}, []);

	const styleTextInput = {
		width: '90%',
		height: 42,
		paddingHorizontal: 15,
		marginHorizontal: 15,
		fontSize: fontSize.h3,
		borderBottomWidth: 1,
		borderColor: 'white',
		marginBottom: 10,
		color: 'white',
		overflow: 'hidden',
		background: 'none',
	};

	const styleLabelInput = {
		color: 'white',
		fontSize: fontSize.h4,
		marginHorizontal: 16,
	};

	// navigation
	const { navigation, route } = props;
	// function
	const { navigate, goBack } = navigation;
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'android' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<ImageBackground source={images.background} style={{ flex: 100 }}>
				{/** Heading */}
				<View
					style={{
						flex: 20,
						width: '100%',
						justifyContent: 'flex-end',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							fontSize: fontSize.h1,
							color: 'white',
							fontWeight: 'bold',
							marginBottom: 10,
							paddingBottom: keyBoardIsShow ? 5 : null,
						}}
					>
						Create an Account
					</Text>
				</View>
				{/** Content */}
				<View style={{ flex: 80 }}>
					<View
						style={{
							flex: 70,
							marginHorizontal: 20,
							alignContent: 'center',
							justifyContent: 'center',
							height: '100%',
						}}
					>
						<Text style={styleLabelInput}>Email:</Text>
						<TextInput
							value={email}
							placeholder="example@gmail.com"
							placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
							style={styleTextInput}
							onChangeText={(text) => {
								if (text !== undefined) {
									setErrorEmail(
										isValidateEmail(text) == true
											? ''
											: 'Email is not correct format'
									);
								}

								setEmail(text);
							}}
						/>
						{errorEmail && (
							<Text
								style={{
									color: colors.primary,
									marginHorizontal: 15,
									fontSize: fontSize.h5,
									marginBottom: 2,
								}}
							>
								{errorEmail}
							</Text>
						)}
						<Text style={styleLabelInput}>Password:</Text>
						<View
							style={{
								flexDirection: 'row',
								width: '90%',
								borderColor: 'white',
								borderBottomWidth: 1,
								marginStart: 15,
								marginBottom: 10,
							}}
						>
							<TextInput
								value={password}
								placeholder="password"
								placeholderTextColor={
									'rgba(255, 255, 255, 0.6)'
								}
								secureTextEntry={showPassword}
								style={[
									styleTextInput,
									{
										width: '80%',
										borderBottomWidth: null,
										paddingHorizontal: 5,
										marginHorizontal: 10,
										marginBottom: null,
									},
								]}
								onChangeText={(text) => {
									setErrorPassword(
										isValidatePassword(text) == true
											? ''
											: 'Length of password must be greater than third'
									);
									setPassword(text);
								}}
							/>
							<TouchableOpacity
								onPress={() => setShowPassword(!showPassword)}
								style={{
									position: 'absolute',
									top: 5,
									right: 0,
									color: 'white',
									padding: 10,
								}}
							>
								{showPassword === true ? (
									<Icon
										name={'eye'}
										size={15}
										color={'white'}
									/>
								) : (
									<Icon
										name={'eye-slash'}
										size={15}
										color={'white'}
									/>
								)}
							</TouchableOpacity>
						</View>
						{errorPassword && (
							<Text
								style={{
									color: colors.primary,
									marginHorizontal: 15,
									fontSize: 15,
									marginBottom: 2,
								}}
							>
								{errorPassword}
							</Text>
						)}
						<Text style={styleLabelInput}>Retype password: </Text>
						<View
							style={{
								flexDirection: 'row',
								width: '90%',
								borderColor: 'white',
								borderBottomWidth: 1,
								marginStart: 15,
								marginBottom: 10,
							}}
						>
							<TextInput
								value={retypePassword}
								placeholder="retype password"
								placeholderTextColor={
									'rgba(255, 255, 255, 0.6)'
								}
								secureTextEntry={showRetypePassword}
								style={[
									styleTextInput,
									{
										width: '80%',
										borderBottomWidth: null,
										paddingHorizontal: 5,
										marginHorizontal: 10,
										marginBottom: null,
									},
								]}
								onChangeText={(text) => {
									setErrorRetypePassword(
										isValidRetypePassword(text, password)
									);
									setRetypePassword(text);
								}}
							/>
							<TouchableOpacity
								onPress={() =>
									setShowRetypePassword(!showRetypePassword)
								}
								style={{
									position: 'absolute',
									top: 5,
									right: 0,
									color: 'white',
									padding: 10,
								}}
							>
								{showPassword === true ? (
									<Icon
										name={'eye'}
										size={15}
										color={'white'}
									/>
								) : (
									<Icon
										name={'eye-slash'}
										size={15}
										color={'white'}
									/>
								)}
							</TouchableOpacity>
						</View>
						{errorRetypePassword && (
							<Text
								style={{
									color: colors.primary,
									marginHorizontal: 15,
									fontSize: fontSize.h5,
									marginBottom: 2,
								}}
							>
								{errorRetypePassword}
							</Text>
						)}
						<View
							style={{
								flexDirection: 'row',
								marginVertical: 10,
								marginHorizontal: 15,
								width: '90%',
								justifyContent: 'space-between',
							}}
						>
							<TouchableOpacity
								style={{
									width: 20,
									height: 20,
									borderColor: 'white',
									borderWidth: 1,
									marginStart: 5,
									alignItems: 'center',
								}}
								onPress={() => setSelected(!isSelected)}
							>
								{isSelected && (
									<Icon
										name={'check'}
										size={15}
										style={{ color: colors.primary }}
									/>
								)}
							</TouchableOpacity>
							<Text
								style={{
									color: 'white',
									fontSize: fontSize.h5,
									width: '70%',
								}}
							>
								I agree to Terms and Conditions
							</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'space-around',
								marginTop: 10,
							}}
						>
							<TouchableOpacity
								style={{
									width: '40%',
									color: colors.primary,
									height: 50,
									textAlign: 'center',
									backgroundColor: 'transparent',
									borderRadius: 5,
									borderColor: 'white',
									borderWidth: 1,
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Text style={{ fontSize: 18, color: 'white' }}>
									Need helps?
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								disabled={!isValidEmailAndPassword}
								style={{
									width: '40%',
									color: colors.primary,
									height: 50,
									justifyContent: 'center',
									alignItems: 'center',
									backgroundColor: colors.primary,
									borderRadius: 5,
									opacity: isValidEmailAndPassword ? 1 : 0.5,
								}}
								onPress={() => {
									// setInfo({ password, email })
									createUserWithEmailAndPassword(
										auth,
										email,
										password
									)
										.then((userCredential) => {
											const user = userCredential.user;
										})
										.catch((error) => {
											Alert(
												`Can't sign-in , error : ${error.message}`
											);
										});
								}}
							>
								<Text
									style={{
										fontSize: fontSize.h3,
										color: 'white',
									}}
								>
									Sign up
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					{/**another */}
					{keyBoardIsShow == false && (
						<View
							style={{
								flex: 30,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={[
									styleLabelInput,
									{
										marginTop: keyBoardIsShow ? 40 : null,
									},
								]}
							>
								Already have an account?{' '}
							</Text>
							<Text
								style={[
									styleLabelInput,
									{
										textDecorationLine: 'underline',
										color: colors.primary,
									},
								]}
								onPress={() => navigate('Login')}
							>
								Sign in
							</Text>
						</View>
					)}
				</View>
			</ImageBackground>
		</KeyboardAvoidingView>
	);
}

export default Register;
