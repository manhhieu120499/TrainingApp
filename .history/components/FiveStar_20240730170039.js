import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function FiveStar(props) {
	return (
		<View style={{ flexDirection: 'row' }}>
			{[0, 1, 2, 3, 4].map((star) =>
				star <= props.stars.length - 1 ? (
					<TouchableOpacity>
						<Icon
							name="star"
							size={15}
							style={{
								color: colors.star,
							}}
						/>
					</TouchableOpacity>
				) : (
					<TouchableOpacity>
						<Icon
							name="star"
							size={15}
							style={{
								color: colors.star,
							}}
						/>
					</TouchableOpacity>
				)
			)}
		</View>
	);
}

export default FiveStar;
