import { View, Text, Image } from 'react-native';
import { fontSize } from '../../constants';

function MessageItem(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<Image
				source={{
					uri: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
				}}
				width={60}
				height={60}
				borderRadius={30}
				resizeMode="cover"
			/>
			<Text
				style={{
					paddingVertical: 10,
					paddingHorizontal: 5,
					fontSize: fontSize.h4,
					color: 'black',
				}}
			>
				How was your flight?
			</Text>
		</View>
	);
}

export default MessageItem;
pr < View > ops;
