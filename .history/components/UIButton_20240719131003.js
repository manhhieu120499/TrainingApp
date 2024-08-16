import React from "react";
import { TouchableOpacity } from "react-native";

function UIButton({ onPress, icon, title }) {
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
	const styleTextButton = {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	};

	const stylesTextActiveButton = {
		color: "#FE6A00",
		width: "90%",
		textAlign: "center",
	};
	return (
		<TouchableOpacity style={stylesButton} onPress={onPress}>
			<Icon
				name={"check-circle"}
				style={{
					color: "black",
					fontSize: 20,
					color: "green",
					position: "absolute",
					top: 13,
					left: 10,
				}}
			/>
			<Text style={[styleTextButton, stylesTextActiveButton]}>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

export default UIButton;
