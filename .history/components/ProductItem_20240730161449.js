import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSize } from '../constants';

function ProductItem(props) {
	let { id, url, name, price, describe, like, rating, viewer, bestSeller } =
		props.data;
	let index = props.index;
	return (
		<View
			style={{
				flex: 0.5,
				height: 265,
				marginTop: index == 0 || index == 1 ? 10 : 5,
				marginLeft: index % 2 == 0 ? 10 : 0,
				marginRight: 10,
				marginBottom: 5,
				borderRadius: 15,
				borderColor: '#DADADA',
				borderWidth: 1,
				padding: 5,
			}}
		>
			<View style={{ width: '100%', flexDirection: 'row', height: 80 }}>
				<Image
					source={{
						uri: url,
					}}
					width={80}
					height={80}
					resizeMode="cover"
					style={{ backgroundColor: 'transparent' }}
				/>
				<Text
					style={{
						flex: 1,
						color: bestSeller == true ? colors.seller : 'black',
						textAlign: 'right',
						fontSize: fontSize.h2,
					}}
				>
					$ {price}
				</Text>
			</View>

			<View
				style={{
					width: '100%',
					marginTop: 10,
					height: 180,
					paddingHorizontal: 5,
				}}
			>
				<Text
					style={{
						color: colors.viewer,
						fontSize: fontSize.h3,
						fontWeight: 'bold',
					}}
				>
					{name}
				</Text>
				{describe.map((item) => (
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Text
							style={{ fontSize: fontSize.h3 }}
						>{`\u2022`}</Text>
						<Text
							style={{
								marginStart: 5,
								color: 'black',
								fontSize: fontSize.h5,
							}}
						>
							{item}
						</Text>
					</View>
				))}
			</View>

			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: 5,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						width: '50%',
						alignItems: 'center',
						height: 40,
					}}
				>
					<Icon
						name="heart"
						size={25}
						style={{
							color: like == true ? colors.like : 'gray',
							borderRadius: 12.5,
						}}
					/>
					<Text
						style={{
							width: 50,
							marginStart: 5,
							color: like == true ? colors.like : 'gray',
						}}
					>
						Save for later
					</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<View style={{ flexDirection: 'row' }}>
						<TouchableOpacity>
							<Icon
								name="star"
								size={15}
								style={{
									color: 1 <= rating ? colors.star : 'gray',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon
								name="star"
								size={15}
								style={{
									color: 2 <= rating ? colors.star : 'gray',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon
								name="star"
								size={15}
								style={{
									color: 3 <= rating ? colors.star : 'gray',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon
								name="star"
								size={15}
								style={{
									color: 4 <= rating ? colors.star : 'gray',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon
								name="star"
								size={15}
								style={{
									color: 5 <= rating ? colors.star : 'gray',
								}}
							/>
						</TouchableOpacity>
					</View>
					<Text style={{ color: colors.viewer }}>
						{viewer} viewer
					</Text>
				</View>
			</View>
		</View>
	);
}

export default ProductItem;
