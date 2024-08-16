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
						<Text
							style={{
								color: "black",
								fontSize: 16,
								marginHorizontal: 15,
							}}
						>
							Email:
						</Text>
						<TextInput placeholder="example@gmail.com" />
						<Text style={{ color: "black", fontSize: 16 }}>
							Password:
						</Text>
						<TextInput
							placeholder="password"
							secureTextEntry={true}
						/>
						<Text style={{ color: "black", fontSize: 16 }}>
							Username:{" "}
						</Text>
						<TextInput placeholder="username" />
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
