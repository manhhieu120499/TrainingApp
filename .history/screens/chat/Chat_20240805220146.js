import { View, Text, TouchableOpacity, Image } from 'react-native';
import { colors, fontSize } from '../../constants';
import { UIHeader } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Chat(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<UIHeader
				title={'Notifications'}
				leftIcon={'chevron-left'}
				rightIcon={'search'}
			/>
			<View
				style={{
					height: 40,
					backgroundColor: 'yellow',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingHorizontal: 10,
					backgroundColor: '#ddd',
				}}
			>
				<Text style={{ fontSize: fontSize.h3, color: colors.viewer }}>
					6 messages unread
				</Text>
				<Icon name="trash" size={15} color={'gray'} />
			</View>
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					height: 80,
					backgroundColor: 'yellow',
					alignItems: 'center',
				}}
			>
				<Image
					source={{
						uri: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
					}}
					width={60}
					height={60}
					resizeMode="cover"
					borderRadius={40}
				/>
				<View>
					<Text style={{ fontSize: fontSize.h3, fontWeight: 'bold' }}>
						Alex
					</Text>
					<Text>Today is good for you</Text>
				</View>
				<Text>5 minutes ago</Text>
			</TouchableOpacity>
		</View>
	);
}

export default Chat;
