import { View, Text } from 'react-native';
import { fontSize, colors } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
function UIHeader(props) {
	const { leftIcon, rightIcon } = props;
	return (
		<View
			style={{
				backgroundColor: colors.like,
				height: 60,
				justifyContent: 'center',
				alignItems: 'center',
				paddingHorizontal: 10,
				flexDirection: 'row',
			}}
		>
			{leftIcon != undefined && <Icon name={leftIcon} size={15} />}
			<Text
				style={{
					fontSize: fontSize.h3,
					color: 'white',
					fontWeight: 'bold',
				}}
			>
				{props.title}
			</Text>
			{rightIcon != undefined && <Icon name={rightIcon} size={15} />}
		</View>
	);
}

export default UIHeader;
