import { View, Text, Image } from 'react-native';
import { fontSize, colors } from '../../constants';

function MessageItem(props) {
	let { item, index } = props.data;
	return (
		<View
			style={{
				flexDirection: `${
					item.isSender == false ? 'row' : 'row-reverse'
				}`,
				marginBottom: 8,
				paddingVertical: 10,
				justifyContent: 'flex-end',
			}}
		>
			<Text
				style={{
					paddingVertical: 10,
					paddingHorizontal: 10,
					fontSize: fontSize.h4,
					color: 'black',
					backgroundColor: colors.messageFriend,
					marginHorizontal: 10,
					borderRadius: 5,
					elevation: 10,
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
				borderRadius={30}
				resizeMode="cover"
			/>
		</View>
	);
}

export default MessageItem;
