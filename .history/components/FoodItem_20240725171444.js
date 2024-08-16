import { Image, Text, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome5';
import { images } from '../constants';
function FoodItem(props) {
	return (
		<View>
			<Image />
			<View>
				<Text>Mỳ Cay Hàn Quốc</Text>
				<View style={{ height: 1, backgroundColor: 'black' }} />
				{/**body */}
				<View>
					<View style={{ flexDirection: 'row' }}>
						<Text>Status: </Text>
						<Text>OPENING SOON</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text>Price Range: </Text>
						<Text>5$</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text>Food Type: </Text>
						<Text>PIZZA</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text>Website: </Text>
						<Text>lacasappizza.com</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Icon name="facebook" />
						<Icon name="twitter" />
						<Icon name="instagram" />
					</View>
				</View>
			</View>
		</View>
	);
}

export default FoodItem;
