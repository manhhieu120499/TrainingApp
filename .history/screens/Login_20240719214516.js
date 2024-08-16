import React, { useState } from "react";
import { Text, ImageBackground, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { images } from "../constants";

function Login(props) {
	return (
		<View style={{ flex: 100 }}>
			<ImageBackground source={images.background} style={{ flex: 100 }}>
				<View style={{ flex: 20, backgroundColor: "red" }}>
					<Text style={{ fontSize: 25, color: "white" }}>LOGIN</Text>
				</View>
				<View style={{ flex: 80, backgroundColor: "green" }}>
					<View
						style={{ flex: 60, backgroundColor: "purple" }}
					></View>
					<View
						style={{ flex: 40, backgroundColor: "yellow" }}
					></View>
				</View>
			</ImageBackground>
		</View>
	);
}

export default Login;
