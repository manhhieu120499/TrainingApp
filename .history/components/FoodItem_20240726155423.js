import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSize, images } from '../constants';
import { useEffect } from 'react';
function FoodItem({ data, onPress }) {
	const typeColor = {
		'OPENING SOON': colors.opening_soon,
		'OPEN NOW': colors.open_now,
		'CLOSING SOON': colors.closing_soon,
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
		<TouchableOpacity
			style={{
				flexDirection: 'row',
				justifyContent: 'space-around',
				marginVertical: 10,
				width: '100%',
				borderColor: '#ccc',
				paddingBottom: 8,
				borderBottomWidth: 1,
			}}
			onPress={onPress}
		>
			<Image
				source={{ uri: data.item.avatar }}
				style={{
					width: 100,
					height: 100,
					borderRadius: 10,
					resizeMode: 'cover',
				}}
			/>
			<View style={{ width: '65%' }}>
				<Text
					style={{
						fontSize: fontSize.h2,
						marginBottom: 5,
						fontWeight: 'bold',
						color: 'black',
					}}
				>
					{data.item.name}
				</Text>
				<View style={{ height: 1, backgroundColor: 'black' }} />
				{/**body */}
				<View style={{ marginTop: 5 }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Status: </Text>
						<Text style={{ color: typeColor[data.item.status] }}>
							{data.item.status}
						</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Price Range: </Text>
						<Text style={textDes}>{data.item.price}</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Food Type: </Text>
						<Text style={textDes}>{data.item.typeFood}</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={textLable}>Website: </Text>
						<Text
							style={[
								textDes,
								{ textDecorationLine: 'underline' },
							]}
						>
							{data.item.website}
						</Text>
					</View>
					{data.item.socialNetwork && (
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'flex-start',
								width: '60%',
							}}
						>
							{data.item.socialNetwork.facebook && (
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
									<Icon
										name="facebook"
										size={20}
										color={'white'}
									/>
								</TouchableOpacity>
							)}
							{data.item.socialNetwork.twitter && (
								<TouchableOpacity
									style={{
										width: 30,
										height: 30,
										backgroundColor: 'gray',
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: 15,
										marginHorizontal: 8,
									}}
								>
									<Icon
										name="twitter"
										size={20}
										color={'white'}
									/>
								</TouchableOpacity>
							)}
							{data.item.socialNetwork.instagram && (
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
									<Icon
										name="instagram"
										size={20}
										color={'white'}
									/>
								</TouchableOpacity>
							)}
						</View>
					)}
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default FoodItem;
