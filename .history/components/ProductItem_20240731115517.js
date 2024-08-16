import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSize } from '../constants';
import { useState } from 'react';
import FiveStar from './FiveStar';

function ProductItem(props) {
	let { url, name, price, describe, like, rating, viewer, bestSeller } =
		props.data;
	let index = props.index;
	const onPress = props.onPress;
	return (
		<View
			style={{
				flex: 0.5,
				marginTop: index == 0 || index == 1 ? 10 : 5,
				marginLeft: index % 2 == 0 ? 10 : 0,
				marginRight: 10,
				marginBottom: 5,
				borderRadius: 15,
				borderColor: '#DADADA',
				borderWidth: 1,
				padding: 5,
				position: 'relative',
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
					paddingHorizontal: 5,
					paddingBottom: 60,
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
				{describe.map((item, index) => (
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}
						key={index}
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
					alignItems: 'flex-end',
					marginVertical: 5,
					position: 'absolute',
					bottom: 0,
					left: 5,
					right: -5,
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
					<TouchableOpacity onPress={onPress}>
						<Icon
							name="heart"
							size={25}
							style={{
								color: like == true ? colors.like : 'gray',
								borderRadius: 12.5,
							}}
						/>
					</TouchableOpacity>
					<Text
						style={{
							width: 50,
							marginStart: 5,
							color: like == true ? colors.like : 'gray',
							fontSize: fontSize.h6 * 0.8,
						}}
					>
						{like == true ? 'Saved for later' : 'Save for later'}
					</Text>
				</View>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
					}}
				>
					<FiveStar stars={rating} />
					<Text style={{ color: colors.viewer, fontWeight: 'bold' }}>
						{viewer} viewer
					</Text>
				</View>
			</View>
		</View>
	);
}

export default ProductItem;
