import { Image, Text, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome5';
import { fontSize, images } from '../constants';
function FoodItem(props) {
	const textLable = {
		fontSize: fontSize.h6,
		fontWeight: 'bold',
		color: 'black',
		marginBottom: 5,
	};
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-around',
				marginVertical: 10,
				width: '100%',
			}}
		>
			<Image source={images.bbq} style={{ width: 80, height: 80 }} />
			<View style={{ width: '60%' }}>
				<Text style={{ fontSize: fontSize.h2, marginBottom: 5 }}>
					Mỳ Cay Hàn Quốc
				</Text>
				<View style={{ height: 1, backgroundColor: 'black' }} />
				{/**body */}
				<View style={{ marginTop: 5 }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Status: </Text>
						<Text>OPENING SOON</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Price Range: </Text>
						<Text>5$</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Food Type: </Text>
						<Text>PIZZA</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Website: </Text>
						<Text>lacasappizza.com</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						{/* <Icon name="facebook" />
						<Icon name="twitter" />
						<Icon name="instagram" /> */}
					</View>
				</View>
			</View>
		</View>
	);
}

export default FoodItem;
