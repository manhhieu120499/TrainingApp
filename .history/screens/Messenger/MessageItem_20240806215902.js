import { View, Text, Image } from 'react-native';
import { fontSize } from '../../constants';

function MessageItem(props) {
	return (
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
					uri: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
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
					backgroundColor: 'red',
					marginHorizontal: 10,
				}}
			>
				How was your flight? How was your flight? How was your flight?
			</Text>
		</View>
	);
}

export default MessageItem;
