import { View, Text, ImageBackground, Image } from 'react-native';
import { fontSize } from '../constants';
import {
	user as UserRepository,
	population as PopulationRepository,
	population,
} from '../repositories';
import { useEffect, useLayoutEffect, useState } from 'react';
import { convertDateToString } from '../utilities';

function Profile(props) {
	const [userInfo, setUserInfo] = useState({});
	const [populationInfo, setPopulationInfo] = useState([]);

	useEffect(() => {
		UserRepository.getUserDetail().then((user) => {
			setUserInfo(user);
		});
		// PopulationRepository.getPopulation({
		// 	drillDown: 'Nations',
		// 	measures: 'Population',
		// }).then((populationItem) => setPopulationInfo(populationItem));
		PopulationRepository.getPopulation({
			drillDown: 'Nations',
			measures: 'Population',
		}).then((populationItem) => setPopulationInfo(populationItem));
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
						uri: `${userInfo.avatar}`,
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
						<Text
							style={{
								fontSize: fontSize.h3,
								color: 'black',
								fontWeight: 'bold',
							}}
						>
							* User_id:{' '}
						</Text>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							{userInfo.userId}
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginStart: 15,
							marginVertical: 10,
						}}
					>
						<Text
							style={{
								fontSize: fontSize.h3,
								color: 'black',
								fontWeight: 'bold',
							}}
						>
							* Username:{' '}
						</Text>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							{userInfo.username}
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginStart: 15,
							marginVertical: 10,
						}}
					>
						<Text
							style={{
								fontSize: fontSize.h3,
								color: 'black',
								fontWeight: 'bold',
							}}
						>
							* Email:{' '}
						</Text>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							{userInfo.email}
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginStart: 15,
							marginVertical: 10,
						}}
					>
						<Text
							style={{
								fontSize: fontSize.h3,
								color: 'black',
								fontWeight: 'bold',
							}}
						>
							* Date of birth:{' '}
						</Text>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							{convertDateToString(userInfo.dateOfBirth)}
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginStart: 15,
							marginVertical: 10,
						}}
					>
						<Text
							style={{
								fontSize: fontSize.h3,
								color: 'black',
								fontWeight: 'bold',
							}}
						>
							* Gender:{' '}
						</Text>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							{userInfo.gender}
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginStart: 15,
							marginVertical: 10,
						}}
					>
						<Text
							style={{
								fontSize: fontSize.h3,
								color: 'black',
								fontWeight: 'bold',
							}}
						>
							* Address:{' '}
						</Text>
						<Text style={{ fontSize: fontSize.h3, color: 'black' }}>
							{userInfo.address}
						</Text>
					</View>
				</View>

				{/** data population */}
				<View style={{ flex: 1, backgroundColor: 'green' }}>
					<Text>
						{JSON.stringify(
							populationInfo
								.map((item) => item.nationName)
								.join(',')
						)}
					</Text>
				</View>
			</View>
		</View>
	);
}

export default Profile;
