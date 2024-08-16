import { View, Text, TouchableOpacity, Image } from 'react-native';
import { colors, fontSize } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function ChatItem(props) {
	return (
		<TouchableOpacity
			style={{
				flexDirection: 'row',
				height: 80,
				backgroundColor: 'white',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingHorizontal: 10,
				borderBottomWidth: 1,
				borderBottomColor: '#ccc',
			}}
		>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Image
					source={{
						uri: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
					}}
					width={60}
					height={60}
					resizeMode="cover"
					borderRadius={40}
				/>
				<Text style={{}}>10</Text>

				<View style={{ marginStart: 10 }}>
					<Text
						style={{
							fontSize: fontSize.h3,
							fontWeight: 'bold',
							color: 'black',
							marginBottom: 2,
						}}
					>
						Alex
					</Text>
					<Text style={{ fontSize: fontSize.h5, color: '#333' }}>
						Today is good for you
					</Text>
				</View>
			</View>
			<Text style={{ fontSize: fontSize.h5 }}>5 mins ago</Text>
		</TouchableOpacity>
	);
}

export default ChatItem;
