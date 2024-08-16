import React, { useState } from "react";
import { Text, ImageBackground, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { images } from "../constants";

function Login(props) {
	return (
		<View style={{ flex: 100 }}>
			<ImageBackground source={images.background}>
				<Text>This is Login</Text>
			</ImageBackground>
		</View>
	);
}

export default Login;
