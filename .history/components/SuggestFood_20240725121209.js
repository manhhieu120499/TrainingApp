import { fontSize, images } from '../constants';
import { TouchableOpacity, Image } from 'react-native';
function SuggestFood(props) {
	return (
		<TouchableOpacity>
			<Image
				source={props.src}
				style={{
					width: 40,
					height: 40,
					borderRadius: 20,
				}}
			/>
			<Text
				style={{
					textAlign: 'center',
					marginTop: 5,
					fontSize: fontSize.h5,
				}}
			>
				{props.title}
			</Text>
		</TouchableOpacity>
	);
}

export default SuggestFood;
