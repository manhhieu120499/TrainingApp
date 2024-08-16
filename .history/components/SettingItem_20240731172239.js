import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { fontSize } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function SettingItem(props) {
	let { title, item } = props.data
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
						Common
					</Text>
				</View>
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
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				{props.iconLeft && <Icon name={props.iconLeft} size={20} />}
				<Text style={{ fontSize: fontSize.h4, marginStart: 10 }}>
					{props.name}
				</Text>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				{props.detail && props.iconRight.length > 0 && (
					<>
						<Text style={{ fontSize: fontSize.h4, marginEnd: 10 }}>
							{props.detail}
						</Text>
						{props.iconRight.map((name) => (
							<Icon name={name} size={15} />
						))}
					</>
				)}
				{props.}
			</View>
		</View>
		</>
		
	);
}

export default SettingItem;
