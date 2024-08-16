import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function FiveStar(props) {
	return (
		<View>
			{props.stars.map((star) => (
				<TouchableOpacity>
					<Icon
						name="star"
						size={15}
						style={{
							color: 1 <= rating ? colors.star : 'gray',
						}}
					/>
				</TouchableOpacity>
			))}
		</View>
	);
}

export default FiveStar;
