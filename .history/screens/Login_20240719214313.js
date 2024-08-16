import React, { useState } from "react";
import { Text, ImageBackground, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { images } from "../constants";

function Login(props) {
	return (
		<View style={{ flex: 100 }}>
			<ImageBackground source={images.background} style={{ flex: 100 }}>
				<View style={{ flex: 20, backgroundColor: "red" }}>
					<Text>This is Login</Text>
				</View>
				<View style={{ flex: 80, backgroundColor: "green" }}></View>
			</ImageBackground>
		</View>
	);
}

export default Login;
