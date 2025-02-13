import React from "react";
import {
	Alert,
	Button,
	Image,
	ImageBackground,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { images } from "../constants";

import { UIButton } from "../components";

function Welcome(props) {
	const stylesContainer = {
		backgroundColor: "white",
		flex: 100,
	};

	return (
		<View style={stylesContainer}>
			<ImageBackground
				source={images.background}
				resizeMethod="cover"
				style={{ flex: 100 }}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: 20,
						flex: 5,
					}}
				>
					<Text style={{ color: "white", fontSize: 20 }}>
						🔥 BADMINTON_COMPANY.CO
					</Text>
					<Image
						source={images.question}
						alt=""
						style={{
							width: 20,
							height: 20,
							background: "none",
							tintColor: "white",
						}}
					/>
				</View>
				{/**content */}
				<View style={{ flex: 60, width: "100%" }}>
					<View style={{ height: 110 }} />
					<View
						style={{
							height: 100,
							justifyContent: "flex-start",
							alignItems: "center",
						}}
					>
						<Text style={{ color: "white", marginBottom: 5 }}>
							Welcome to
						</Text>
						<Text
							style={{
								color: "white",
								marginBottom: 8,
								fontSize: 18,
								fontWeight: "bold",
							}}
						>
							BADMINTON_COMPANY.CO !
						</Text>
						<Text style={{ color: "white" }}>
							Please select your account type
						</Text>
					</View>
					<View
						style={{
							width: "100%",
							alignItems: "center",
							marginTop: 20,
						}}
					>
						<UIButton
							onPress={() => {
								alert("you press this button");
							}}
							icon
							title={"Badminton user"}
							selected
						/>

						<UIButton title={"Business"} />
						<UIButton title={"Individual"} />
					</View>
				</View>
				{/** footer */}
				<View
					style={{
						flex: 25,
						width: "100%",
						alignItems: "center",
						marginTop: 10,
					}}
				>
					<UIButton title={"Next"} />
					<Text style={{ color: "white", marginTop: 15 }}>
						Don't know what account type to use ?
					</Text>
					<Text
						style={{
							color: "rgba(255, 255, 255, 0.5)",
							marginTop: 8,
						}}
					>
						Check out our post
					</Text>
				</View>
			</ImageBackground>
		</View>
	);
}

export default Welcome;
