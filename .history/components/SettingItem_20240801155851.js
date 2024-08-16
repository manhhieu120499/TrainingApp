import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { fontSize } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function SettingItem(props) {
	let { title, item } = props.data;
	let onPress = props.onPress;
	return (
		<View>
			<View
				style={{
					backgroundColor: '#ccc',
					height: 40,
					justifyContent: 'center',
				}}
			>
				<Text
					style={{
						fontSize: fontSize.h4,
						color: 'red',
						marginStart: 10,
					}}
				>
					{title}
				</Text>
			</View>
			{item.map((setting, index) => (
				<View
					style={{
						flex: 1,
						paddingHorizontal: 10,
						height: 50,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
					key={index}
				>
					<View
						style={{ flexDirection: 'row', alignItems: 'center' }}
					>
						{setting.iconLeft && (
							<Icon
								name={setting.iconLeft}
								size={20}
								style={{
									width: 20,
									textAlign: 'center',
									color: 'black',
								}}
							/>
						)}
						<Text
							style={{
								fontSize: fontSize.h4,
								marginStart: 10,
								color: 'black',
							}}
						>
							{setting.name}
						</Text>
					</View>
					<View
						style={{ flexDirection: 'row', alignItems: 'center' }}
					>
						{setting.detail != undefined &&
							setting.iconRight.length > 0 && (
								<>
									<Text
										style={{
											fontSize: fontSize.h4,
											marginEnd: 10,
										}}
									>
										{setting.detail}
									</Text>
									{setting.iconRight.map((name, index) => (
										<Icon
											name={name}
											size={15}
											key={index}
										/>
									))}
								</>
							)}
						{setting.detail == undefined &&
							setting.iconRight.length == 1 && (
								<Icon name={setting.iconRight[0]} size={15} />
							)}

						{title == 'Security' && (
							<>
								{setting.isActive == true && (
									<TouchableOpacity
										onPress={() => onPress(setting, title)}
									>
										<Icon
											name={setting.iconRight[0]}
											size={35}
											color={'red'}
										/>
									</TouchableOpacity>
								)}
								{setting.isActive == false && (
									<TouchableOpacity
										onPress={() => onPress(setting, title)}
									>
										<Icon
											name={setting.iconRight[1]}
											size={35}
										/>
									</TouchableOpacity>
								)}
							</>
						)}
					</View>
				</View>
			))}
		</View>
	);
}

export default SettingItem;
