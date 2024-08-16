import React from "react";
import { TouchableOpacity } from "react-native";

function UIButton({ onPress, icon, children }) {
	const Icon = icon;
	const stylesButton = {
		width: "90%",
		height: 50,
		background: "transparent",
		borderWidth: 1,
		borderColor: "white",
		borderRadius: 5,
		marginBottom: 15,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	};
	return (
		<TouchableOpacity style={stylesButton} onPress={onPress}>
			<Icon />
			{children}
		</TouchableOpacity>
	);
}

export default UIButton;
