import { View, Text, Image } from 'react-native';
import { fontSize, colors } from '../../constants';
import { screenWidth } from '../../utilities/Device';

function MessageItem(props) {
	let { item, index } = props.data;
	return (
		<View
			style={{
				flexDirection: `${
					item.isSender == false ? 'row' : 'row-reverse'
				}`,
				paddingVertical: 10,
				justifyContent: 'flex-end',
				alignItems: 'center',
				backgroundColor: 'red',
			}}
		>
			<Text
				style={{
					paddingHorizontal: 10,
					fontSize: fontSize.h4,
					color: 'black',
					backgroundColor: colors.messageFriend,
					marginHorizontal: 10,
					borderRadius: 5,
					elevation: 10,
					paddingTop: 4,
				}}
			>
				{item.content}
			</Text>
			<Image
				source={{
					uri: `${item.url}`,
				}}
				width={40}
				height={40}
				borderRadius={20}
				resizeMode="cover"
			/>
		</View>
	);
}

export default MessageItem;
