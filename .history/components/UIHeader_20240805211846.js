import { View, Text } from 'react-native';
import { fontSize, colors } from '../constants';
function UIHeader(props) {
	return (
		<View
			style={{
				backgroundColor: colors.like,
				height: 60,
				justifyContent: 'center',
				alignItems: 'center',
				paddingHorizontal: 10,
			}}
		>
			<Text
				style={{
					fontSize: fontSize.h3,
					color: 'white',
					fontWeight: 'bold',
				}}
			>
				{props.title}
			</Text>
		</View>
	);
}

export default UIHeader;
