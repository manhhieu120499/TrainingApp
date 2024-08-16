import React, { useState } from "react";
import { Text, ImageBackground, View, TouchableOpacity } from "react-native";
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
						flexDirection: "row",
						width: "100%",
						justifyContent: "space-around",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							fontSize: 25,
							color: "white",
							fontWeight: "bold",
							width: "50%",
							justifyContent: "center",
						}}
					>
						Already have an Account ?
					</Text>
					<Icon name={"laptop"} size={100} style={{ width: "50%" }} />
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
