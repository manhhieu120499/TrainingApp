import { View, Text, ImageBackground, Image } from 'react-native';
import { fontSize } from '../constants';
import {
	user as UserRepository,
	population as PopulationRepository,
	population,
} from '../repositories';
import { useEffect, useLayoutEffect, useState } from 'react';
import { convertDateToString } from '../utilities';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

function Profile(props) {
	const [userInfo, setUserInfo] = useState({});
	const [populationInfos, setPopulationInfos] = useState([]);

	useEffect(() => {
		UserRepository.getUserDetail().then((user) => {
			setUserInfo(user);
		});
		PopulationRepository.getPopulation({
			drillDown: 'Nation',
			measures: 'Population',
		}).then((populationItems) => setPopulationInfos(populationItems));
	}, []);

	const data = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June'],
		datasets: [
			{
				data: [20, 45, 28, 80, 99, 43],
				color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
				strokeWidth: 2, // optional
			},
		],
		legend: ['Rainy Days'], // optional
	};
	const screenWidth = Dimensions.get('window').width;
	const chartConfig = {
		backgroundColor: '#e26a00',
		backgroundGradientFrom: '#fb8c00',
		backgroundGradientTo: '#ffa726',
		decimalPlaces: 2, // optional, defaults to 2dp
		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		style: {
			borderRadius: 16,
		},
		propsForDots: {
			r: '6',
			strokeWidth: '2',
			stroke: '#ffa726',
		},
	};

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
						uri: `${
							userInfo.avatar == undefined
								? 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
								: userInfo.avatar
						}`,
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
					{/* <Text>
						{JSON.stringify(
							populationInfos
								.map((item) => item.nationName)
								.join(',')
						)}
					</Text> */}
					<LineChart
						data={{
							labels: populationInfos
								.map((item) => item.year)
								.reverse(),
							datasets: [
								{
									data: populationInfos
										.map((item) => item.population)
										.reverse(),
									color: (opacity = 1) =>
										`rgba(134, 65, 244, ${opacity})`, // optional
									strokeWidth: 2, // optional
								},
							],
							legend: ['Population Graphic'], // optional
						}}
						width={screenWidth}
						height={240}
						chartConfig={chartConfig}
					/>
				</View>
			</View>
		</View>
	);
}

export default Profile;
