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
				<TouchableOpacity
					style={{
						width: 35,
						height: 35,
						backgroundColor: 'red',
						alignItems: 'center',
					}}
				>
					<Icon
						name={leftIcon}
						size={15}
						color={'white'}
						style={{ padding: 5 }}
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
				<TouchableOpacity
					style={{
						width: 35,
						height: 35,
						backgroundColor: 'red',
						alignItems: 'center',
					}}
				>
					<Icon
						name={rightIcon}
						size={15}
						color={'white'}
						style={{ padding: 5 }}
					/>
				</TouchableOpacity>
			)}
		</View>
	);
}

export default UIHeader;
