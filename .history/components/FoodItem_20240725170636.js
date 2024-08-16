import { Image, Text } from 'react-native-elements';

function FoodItem(props) {
	return (
		<View>
			<Image />
			<View>
				<Text>Mỳ Cay Hàn Quốc</Text>
				<View styles={{ height: 1, backgroundColor: 'black' }} />
				{/**body */}
				<View>
					<View style={{ flexDirection: 'row' }}>
						<Text>Status: </Text>
						<Text>OPENING SOON</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

export default FoodItem;
