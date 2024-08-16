import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSize, images } from '../constants';
import { useEffect } from 'react';
function FoodItem({ data }) {
	console.log(data);
	const typeColor = {
		'OPENING SOON': colors.opening_soon,
		'OPEN NOW': colors.open_now,
		'CLOSING SOON': colors.closing_soon,
	};

	useEffect(() => {
		console.log(typeof typeColor['OPENING SOON']);
	});

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
				borderColor: '#ccc',
				paddingBottom: 8,
				borderBottomWidth: 1,
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
					Mỳ Cay Hàn Quốc Mỳ Cay Hàn Quốc
				</Text>
				<View style={{ height: 1, backgroundColor: 'black' }} />
				{/**body */}
				<View style={{ marginTop: 5 }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Status: </Text>
						<Text style={{ color: typeColor['CLOSING SOON'] }}>
							OPENING SOON
						</Text>
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
						<Text
							style={[
								textDes,
								{ textDecorationLine: 'underline' },
							]}
						>
							lacasappizza.com
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							width: '60%',
						}}
					>
						<TouchableOpacity
							style={{
								width: 30,
								height: 30,
								backgroundColor: 'gray',
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 15,
							}}
						>
							<Icon name="facebook" size={20} color={'white'} />
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								width: 30,
								height: 30,
								backgroundColor: 'gray',
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 15,
							}}
						>
							<Icon name="twitter" size={20} color={'white'} />
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								width: 30,
								height: 30,
								backgroundColor: 'gray',
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 15,
							}}
						>
							<Icon name="instagram" size={20} color={'white'} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

export default FoodItem;
