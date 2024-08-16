import React, { useState } from "react";
import {
	Text,
	ImageBackground,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { images } from "../constants";

function Login(props) {
	const styleTextInput = {
		width: "90%",
		height: 50,
		backgroundColor: "red",
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
		color: "black",
		fontSize: 16,
		marginHorizontal: 16,
	};
	return (
		<View style={{ flex: 1 }}>
			<ImageBackground source={images.background} style={{ flex: 100 }}>
				<View
					style={{
						flex: 20,
						backgroundColor: "red",
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
							flex: 80,
							backgroundColor: "white",
							marginHorizontal: 20,
							alignContent: "center",
							justifyContent: "center",
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
								secureTextEntry={true}
								style={styleTextInput}
							/>
							<Icon
								name={"eye"}
								style={{
									position: "absolute",
									top: 20,
									right: 30,
									color: "black",
								}}
								size={15}
							/>
						</View>
						<Text style={styleLabelInput}>Username: </Text>
						<TextInput
							placeholder="username"
							style={styleTextInput}
						/>
					</View>
					<View
						style={{ flex: 20, backgroundColor: "yellow" }}
					></View>
				</View>
			</ImageBackground>
		</View>
	);
}

export default Login;
