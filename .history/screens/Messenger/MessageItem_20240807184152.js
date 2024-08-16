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
			<View
				style={{
					flexDirection: 'row',
					marginRight: 40,
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
						paddingVertical: 5,
					}}
				>
					{item.content}
				</Text>
			</View>
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
