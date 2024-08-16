import React, { useState } from "react";
import {
	Text,
	ImageBackground,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, images } from "../constants";
// import CheckBox from "react-native";

function Login(props) {
	const [showPassword, setShowPassword] = useState(true);

	const styleTextInput = {
		width: "90%",
		height: 35,
		paddingHorizontal: 15,
		marginHorizontal: 15,
		fontSize: 18,
		borderBottomWidth: 1,
		borderColor: "white",
		marginBottom: 10,
		color: "white",
		overflow: "hidden",
		background: "none",
	};

	const styleLabelInput = {
		color: "white",
		fontSize: 16,
		marginHorizontal: 16,
		marginBottom: 10,
	};
	return (
		<View style={{ flex: 1 }}>
			<ImageBackground source={images.background} style={{ flex: 100 }}>
				<View
					style={{
						flex: 20,
						width: "100%",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							fontSize: 25,
							color: "white",
							fontWeight: "bold",
							marginBottom: 15,
						}}
					>
						Create an Account
					</Text>
				</View>
				<View style={{ flex: 80 }}>
					<View
						style={{
							flex: 70,
							marginHorizontal: 20,
							alignContent: "center",
							justifyContent: "center",
						}}
					>
						<Text style={styleLabelInput}>Email:</Text>
						<TextInput
							placeholder="example@gmail.com"
							placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
							style={styleTextInput}
						/>
						<Text style={styleLabelInput}>Password:</Text>
						<View
							style={{
								flexDirection: "row",
								width: "90%",
								borderColor: "white",
								borderBottomWidth: 1,
								marginStart: 15,
								marginBottom: 10,
							}}
						>
							<TextInput
								placeholder="password"
								placeholderTextColor={
									"rgba(255, 255, 255, 0.6)"
								}
								secureTextEntry={showPassword}
								style={[
									styleTextInput,
									{
										width: "80%",
										borderBottomWidth: null,
										paddingHorizontal: 5,
										marginHorizontal: 10,
										marginBottom: null,
									},
								]}
							/>
							<TouchableOpacity
								onPress={() => setShowPassword(!showPassword)}
								style={{
									position: "absolute",
									top: 0,
									right: 0,
									color: "white",
									padding: 10,
								}}
							>
								{showPassword === true ? (
									<Icon
										name={"eye"}
										size={15}
										color={"white"}
									/>
								) : (
									<Icon
										name={"eye-slash"}
										size={15}
										color={"white"}
									/>
								)}
							</TouchableOpacity>
						</View>
						<Text style={styleLabelInput}>Username: </Text>
						<TextInput
							placeholder="username"
							placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
							style={styleTextInput}
						/>
						<View
							style={{
								flexDirection: "row",
								marginTop: 20,
								marginBottom: 10,
								width: "100%",
								justifyContent: "flex-end",
							}}
						>
							{/* <CheckBox>
								
							</CheckBox> */}
							<Text
								style={{
									color: "white",
									fontSize: 14,
									width: "70%",
									justifyContent: "flex-end",
								}}
							>
								I agree to Terms and Conditions
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
								justifyContent: "space-around",
								marginTop: 10,
							}}
						>
							<TouchableOpacity
								style={{
									width: "40%",
									color: colors.primary,
									height: 50,
									textAlign: "center",
									backgroundColor: "transparent",
									borderRadius: 5,
									borderColor: "white",
									borderWidth: 1,
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Text style={{ fontSize: 18, color: "white" }}>
									Need helps?
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									width: "40%",
									color: colors.primary,
									height: 50,
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: colors.primary,
									borderRadius: 5,
								}}
							>
								<Text style={{ fontSize: 18, color: "white" }}>
									Sign up
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View
						style={{
							flex: 30,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text style={styleLabelInput}>
							Already have an account?{" "}
						</Text>
						<Text
							style={[
								styleLabelInput,
								{
									textDecorationLine: "underline",
									color: colors.primary,
								},
							]}
						>
							Sign in
						</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

export default Login;
