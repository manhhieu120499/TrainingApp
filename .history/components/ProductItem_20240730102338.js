import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function ProductItem(props) {
	return (
		<View style={{ width: 180, height: 250, backgroundColor: 'red' }}>
			<View style={{ width: '100%' }}>
				<Image
					source={{
						uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUhg_SJm1bQZ3bqP71TyLBpnRFGwdYHAdJA&s',
					}}
					width={120}
					height={120}
					resizeMode="cover"
				/>
				<Text style={{ flex: 1, color: 'black' }}>$ 75</Text>
			</View>
		</View>
	);
}

export default ProductItem;
