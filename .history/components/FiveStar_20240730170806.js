import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../constants';

function FiveStar(props) {
	console.log(props);
	return (
		<View style={{ flexDirection: 'row' }}>
			{[0, 1, 2, 3, 4].map((star, index) => (
				<TouchableOpacity key={index}>
					<Icon
						name="star"
						size={15}
						style={{
							color:
								star <= props.stars - 1 ? colors.star : 'gray',
						}}
					/>
				</TouchableOpacity>
			))}
		</View>
	);
}

export default FiveStar;
