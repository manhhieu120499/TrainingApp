import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSize } from '../constants';

function ProductItem(props) {
	return (
		<View
			style={{
				width: 190,
				height: 270,
				backgroundColor: 'red',
				borderRadius: 10,
				padding: 8,
			}}
		>
			<View style={{ width: '100%', flexDirection: 'row' }}>
				<Image
					source={{
						uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUhg_SJm1bQZ3bqP71TyLBpnRFGwdYHAdJA&s',
					}}
					width={100}
					height={100}
					resizeMode="cover"
					style={{ backgroundColor: 'transparent' }}
				/>
				<Text
					style={{
						flex: 1,
						color: 'black',
						textAlign: 'right',
						fontSize: fontSize.h2,
					}}
				>
					$ 75
				</Text>
			</View>
			<View style={{ width: '100%', height: 120 }}>
				<Text style={{ color: colors.viewer, fontSize: fontSize.h3 }}>
					Samsung RC475
				</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ fontSize: fontSize.h3 }}>{`\u2022`}</Text>
					<Text
						style={{
							marginStart: 5,
							color: 'black',
							fontSize: fontSize.h4,
						}}
					>
						dry clean
					</Text>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ fontSize: fontSize.h3 }}>{`\u2022`}</Text>
					<Text
						style={{
							marginStart: 5,
							color: 'black',
							fontSize: fontSize.h4,
						}}
					>
						dry clean
					</Text>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ fontSize: fontSize.h3 }}>{`\u2022`}</Text>
					<Text
						style={{
							marginStart: 5,
							color: 'black',
							fontSize: fontSize.h4,
						}}
					>
						dry clean
					</Text>
				</View>
			</View>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: 5,
					height: 50,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						width: '50%',
						alignItems: 'center',
					}}
				>
					<Icon name="heart" size={25} />
					<Text style={{ width: 50, marginStart: 5 }}>
						Save for later
					</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<View style={{ flexDirection: 'row' }}>
						<TouchableOpacity>
							<Icon name="star" size={15} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon name="star" size={15} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon name="star" size={15} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon name="star" size={15} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon name="star" size={15} />
						</TouchableOpacity>
					</View>
					<Text style={{ color: colors.viewer }}>19 viewer</Text>
				</View>
			</View>
		</View>
	);
}

export default ProductItem;
