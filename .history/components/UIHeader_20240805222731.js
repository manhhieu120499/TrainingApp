import { View, Text, TouchableOpacity } from 'react-native';
import { fontSize, colors } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
function UIHeader(props) {
	const { leftIcon, rightIcon } = props;
	return (
		<View
			style={{
				backgroundColor: colors.like,
				height: 60,
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingHorizontal: 10,
				flexDirection: 'row',
			}}
		>
			{leftIcon != undefined && (
				<TouchableOpacity>
					<Icon
						name={leftIcon}
						size={25}
						color={'white'}
						style={{ padding: 5, backgroundColor: 'yellow' }}
					/>
				</TouchableOpacity>
			)}
			<Text
				style={{
					fontSize: fontSize.h3,
					color: 'white',
					fontWeight: 'bold',
				}}
			>
				{props.title}
			</Text>
			{rightIcon != undefined && (
				<TouchableOpacity>
					<Icon name={rightIcon} size={15} color={'white'} />
				</TouchableOpacity>
			)}
		</View>
	);
}

export default UIHeader;
