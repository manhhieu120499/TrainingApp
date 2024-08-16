import { View, Text } from 'react-native';
import { fontSize } from '../constants';
function UIHeader(props) {
	return (
		<View
			style={{
				backgroundColor: 'red',
				height: 60,
				justifyContent: 'center',
				alignItems: 'center',
				paddingHorizontal: 10,
			}}
		>
			<Text
				style={{
					fontSize: fontSize.h2,
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
