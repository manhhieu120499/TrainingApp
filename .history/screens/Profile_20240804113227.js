import { View, Text, ImageBackground, Image } from 'react-native';

function Profile(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'green' }}>
			<View
				style={{
					height: 120,
					backgroundColor: 'white',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image
					source={{
						uri: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
					}}
					width={100}
					height={100}
					resizeMode="cover"
					style={{
						borderRadius: 50,
						borderColor: '#333',
						borderWidth: 1,
					}}
				/>
			</View>
		</View>
	);
}

export default Profile;
