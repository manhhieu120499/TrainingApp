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
import { CheckBox } from "react-native-elements";

function Login(props) {
	const styleTextInput = {
		width: "90%",
		height: 50,
		paddingHorizontal: 15,
		marginHorizontal: 15,
		fontSize: 14,
		borderWidth: 2,
		borderColor: "white",
		marginBottom: 10,
		color: "white",
		overflow: "hidden",
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
							borderWidth: 1,
							borderColor: "white",
						}}
					>
						<Text style={styleLabelInput}>Email:</Text>
						<TextInput
							placeholder="example@gmail.com"
							style={styleTextInput}
						/>
						<Text style={styleLabelInput}>Password:</Text>
						<View
							style={{
								flexDirection: "row",
							}}
						>
							<TextInput
								placeholder="password"
								placeholderTextColor={"rgba(255, 255, 255, 0.5"}
								secureTextEntry={true}
								style={styleTextInput}
							/>
							<Icon
								name={"eye"}
								style={{
									position: "absolute",
									top: 20,
									right: 30,
									color: "white",
								}}
								size={15}
							/>
						</View>
						<Text style={styleLabelInput}>Username: </Text>
						<TextInput
							placeholder="username"
							style={styleTextInput}
						/>
						<View
							style={{
								flexDirection: "row",
								marginTop: 20,
								width: "100%",
							}}
						>
							<Text
								style={{
									color: "black",
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
					<View style={{ flex: 30, backgroundColor: "yellow" }}>
						<Text>Already have an account? </Text>
						<Text>Sign in</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

export default Login;
