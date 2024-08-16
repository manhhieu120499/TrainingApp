import { View, Text, ImageBackground, Image } from 'react-native';
import { fontSize } from '../constants';

function Profile(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'green' }}>
			<View
				style={{
					height: 150,
					backgroundColor: 'white',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image
					source={{
						uri: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
					}}
					width={120}
					height={120}
					resizeMode="cover"
					style={{
						borderRadius: 60,
						borderColor: '#333',
						borderWidth: 1,
					}}
				/>
			</View>
			<View style={{ flex: 1, backgroundColor: 'blue' }}>
				<View>
					<Text
						style={{
							fontSize: fontSize.h2,
							textAlign: 'center',
							color: 'blacks',
						}}
					>
						Thông tin cá nhân
					</Text>
					{/* Content */}
					<View>
						<Text>FirstName: </Text>
						<Text>Lucy Farm</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

export default Profile;
