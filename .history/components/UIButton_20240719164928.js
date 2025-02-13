import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../constants";

function UIButton({ onPress, title, selected }) {
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
		backgroundColor: selected ? "white" : "transparent",
	};

	const styleTextButton = {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	};

	const stylesTextActiveButton = {
		color: [colors.primary],
		width: "90%",
		textAlign: "center",
	};
	return (
		<TouchableOpacity style={stylesButton} onPress={onPress}>
			{selected && (
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
			)}
			<Text style={[styleTextButton, selected && stylesTextActiveButton]}>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

export default UIButton;
