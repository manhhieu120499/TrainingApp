import { colors, fontSize } from '../constants';
import { TouchableOpacity, Image, Text } from 'react-native';
function SuggestFood(props) {
	return (
		<TouchableOpacity
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				width: 62,
			}}
			onPress={() => alert('The food you choose is available')}
		>
			<Image
				source={{ uri: props.src }}
				style={{
					width: 40,
					height: 40,
					borderRadius: 20,
					borderColor: 'black',
					borderWidth: 1,
				}}
			/>
			<Text
				style={{
					textAlign: 'center',
					marginTop: 5,
					fontSize: fontSize.h7,
					color: colors.primary,
				}}
			>
				{props.title}
			</Text>
		</TouchableOpacity>
	);
}

export default SuggestFood;
