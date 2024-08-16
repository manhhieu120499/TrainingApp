import { View, Text, ImageBackground, Image } from 'react-native';
import { fontSize } from '../constants';
import {
	user as UserRepository,
	population as PopulationRepository,
} from '../repositories';
import { useEffect, useState } from 'react';

function Profile(props) {
	const [userInfo, setUserInfo] = useState();
	useEffect(() => {
		UserRepository.getUserDetail().then((user) => setUserInfo(user));
	}, []);
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
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<View>
					<Text
						style={{
							fontSize: fontSize.h2,
							textAlign: 'center',
							color: 'black',
						}}
					>
						Thông tin cá nhân
					</Text>
					{/* Content */}
					<View
						style={{
							flexDirection: 'row',
							marginStart: 15,
							marginVertical: 10,
						}}
					>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							* FirstName:{' '}
						</Text>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							Lucy Farm
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginStart: 15,
							marginVertical: 10,
						}}
					>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							* LastName:{' '}
						</Text>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							Nguyen
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginStart: 15,
							marginVertical: 10,
						}}
					>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							* Age:{' '}
						</Text>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							28
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

export default Profile;
