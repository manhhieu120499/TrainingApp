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
import { useState } from "react";

function Welcome(props) {
	// state => when state change => UI reload
	const [accountType, setAccountType] = useState([
		{
			name: "Badminton user",
			selected: false,
		},
		{
			name: "Business",
			selected: false,
		},
		{
			name: "Individual",
			selected: false,
		},
	]);

	const handleOnPressButton = (e) => {
		let newAccountType = accountType.map((thisAccount) =>
			thisAccount.name === e.target.name
				? (thisAccount.selected = true)
				: (thisAccount.selected = false)
		);
	};
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
						{accountType.map((account, index) => (
							<UIButton
								key={index}
								title={account.name}
								selected={account.selected}
							/>
						))}
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
