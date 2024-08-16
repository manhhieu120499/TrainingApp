import { View, Text, TouchableOpacity, Image } from 'react-native';
import { colors, fontSize } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
import { convertTime } from '../../utilities';

function ChatItem(props) {
	let { name, url, message, numberOfUnreadMessage } = props.data;
	let { onPress } = props;
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
				<View style={{ position: 'relative' }}>
					<Image
						source={{
							uri: `${
								url == undefined
									? 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223'
									: url
							}`,
						}}
						width={60}
						height={60}
						resizeMode="cover"
						borderRadius={40}
					/>
					{numberOfUnreadMessage > 0 && (
						<Text
							style={{
								width: 20,
								height: 20,
								backgroundColor: 'red',
								borderRadius: 10,
								textAlign: 'center',
								position: 'absolute',
								top: 0,
								right: -5,
								color: 'white',
								fontSize: fontSize.h6 * 0.8,
								paddingTop: 2,
							}}
						>
							{numberOfUnreadMessage}
						</Text>
					)}
				</View>

				<View style={{ marginStart: 18 }}>
					<Text
						style={{
							fontSize: fontSize.h3,
							fontWeight: 'bold',
							color: 'black',
							marginBottom: 2,
						}}
					>
						{name}
					</Text>
					<Text style={{ fontSize: fontSize.h5, color: '#333' }}>
						{message}
					</Text>
				</View>
			</View>
			{/* <Text style={{ fontSize: fontSize.h5 }}>
				{convertTime(numberOfUnreadMessage)}
			</Text> */}
		</TouchableOpacity>
	);
}

export default ChatItem;
