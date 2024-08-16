import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize } from '../constants';

function ProductItem(props) {
	return (
		<View
			style={{
				width: 190,
				height: 250,
				backgroundColor: 'red',
				borderRadius: 10,
				padding: 8,
			}}
		>
			<View style={{ width: '100%', flexDirection: 'row', flex: 50 }}>
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
			<View style={{ flex: 30, width: '100%' }}>
				<Text style={{ fontSize: fontSize.h3 }}>{`\u2022`}</Text>
				<Text>dry clean</Text>
			</View>
		</View>
	);
}

export default ProductItem;
