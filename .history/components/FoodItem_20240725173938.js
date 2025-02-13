import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize, images } from '../constants';
function FoodItem(props) {
	const typeColor = {
		'OPENING SOON': 'yellow',
		'OPEN NOW': 'green',
		'CLOSING SOON': 'red',
	};

	const textLable = {
		fontSize: fontSize.h6,
		fontWeight: 'bold',
		color: 'black',
		marginBottom: 5,
	};
	const textDes = {
		fontSize: fontSize.h6,
		fontWeight: 'bold',
		color: 'gray',
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
			<Image
				source={images.bbq}
				style={{ width: 80, height: 80, borderRadius: 10 }}
			/>
			<View style={{ width: '60%' }}>
				<Text
					style={{
						fontSize: fontSize.h2,
						marginBottom: 5,
						fontWeight: 'bold',
						color: 'black',
					}}
				>
					Mỳ Cay Hàn Quốc
				</Text>
				<View style={{ height: 1, backgroundColor: 'black' }} />
				{/**body */}
				<View style={{ marginTop: 5 }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Status: </Text>
						<Text style={{}}>OPENING SOON</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Price Range: </Text>
						<Text style={textDes}>5$</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Food Type: </Text>
						<Text style={textDes}>PIZZA</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Website: </Text>
						<Text style={textDes}>lacasappizza.com</Text>
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
