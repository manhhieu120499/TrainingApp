import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { fontSize } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function SettingItem(props) {
	let { title, item } = props.data;
	console.log(title, item);
	return (
		<>
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
			{item.map((setting) => (
				<View
					style={{
						flex: 1,
						paddingHorizontal: 10,
						height: 50,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						// backgroundColor: 'pink',
					}}
				>
					<View
						style={{ flexDirection: 'row', alignItems: 'center' }}
					>
						{setting.iconLeft && (
							<Icon
								name={setting.iconLeft}
								size={20}
								style={{
									width: 40,

									textAlign: 'center',
								}}
							/>
						)}
						<Text
							style={{ fontSize: fontSize.h4, marginStart: 10 }}
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
									{setting.iconRight.map((name) => (
										<Icon name={name} size={15} />
									))}
								</>
							)}
						{setting.detail == undefined &&
							setting.iconRight.length == 1 && (
								<Icon name={setting.iconRight[0]} size={15} />
							)}

						{title == 'Security' && (
							<TouchableOpacity>
								{setting.isActive == true && (
									<Icon
										name={setting.iconRight[0]}
										size={35}
										color={'red'}
									/>
								)}
								{setting.isActive == false && (
									<Icon
										name={setting.iconRight[1]}
										size={35}
									/>
								)}
							</TouchableOpacity>
						)}
					</View>
				</View>
			))}
		</>
	);
}

export default SettingItem;
