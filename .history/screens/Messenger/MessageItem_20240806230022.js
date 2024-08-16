import { View, Text, Image } from 'react-native';
import { fontSize, colors } from '../../constants';

function MessageItem(props) {
	let { name, url } = props.data;
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#ccc',
				paddingHorizontal: 15,
			}}
		>
			<Text
				style={{
					textAlign: 'center',
					fontSize: fontSize.h5 * 0.8,
					marginVertical: 10,
				}}
			>
				Jun 5
			</Text>
			{props.index % 2 == 0 ? (
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
							uri: `${url}`,
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
						How was your flight?
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
						How was your flight?
					</Text>
					<Image
						source={{
							uri: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223',
						}}
						width={40}
						height={40}
						borderRadius={30}
						resizeMode="cover"
					/>
				</View>
			)}
		</View>
	);
}

export default MessageItem;
