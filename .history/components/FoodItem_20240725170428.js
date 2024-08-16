import { Image } from 'react-native-elements';

function FoodItem(props) {
	return (
		<View>
			<Image />
			<View>
				<Text>Mỳ Cay Hàn Quốc</Text>
				<View styles={{ height: 1, backgroundColor: 'black' }} />
			</View>
		</View>
	);
}

export default FoodItem;
