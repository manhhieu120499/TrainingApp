import { View, Text, Image } from 'react-native';
import { fontSize, colors } from '../../constants';

function MessageItem(props) {
	let { item, index } = props.data;
	return (
		<>
			{index % 2 == 0 ? (
				<View
					style={{
						flexDirection: 'row',
						marginBottom: 15,
						width: '80%',
						paddingVertical: 10,
					}}
				>
					<Image
						source={{
							uri: `${item.url}`,
						}}
						width={40}
						height={40}
						borderRadius={30}
						resizeMode="cover"
					/>
					<Text
						style={{
							paddingVertical: 10,
							paddingHorizontal: 10,
							fontSize: fontSize.h4,
							color: 'black',
							backgroundColor: '#fff',
							marginHorizontal: 10,
							borderRadius: 5,
							elevation: 10,
						}}
					>
						{item.content}
					</Text>
				</View>
			) : (
				<View
					style={{
						flexDirection: 'row',
						marginBottom: 15,
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
			)}
		</>
	);
}

export default MessageItem;
