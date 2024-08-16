import { SectionList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize } from '../constants';
import { useState } from 'react';

function Setting(props) {
	const [settings, setSettings] = useState([
		{
			title: 'Common',
			item: [
				{
					name: 'Language',
					detail: 'English',
					icon: 'globe',
				},
				{
					name: 'Environment',
					detail: 'Production',
					icon: 'cloud',
				},
			],
		},
	]);
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View
				style={{
					backgroundColor: 'red',
					height: 60,
					justifyContent: 'center',
					paddingHorizontal: 10,
				}}
			>
				<Text
					style={{
						fontSize: fontSize.h2,
						color: 'white',
						fontWeight: 'bold',
					}}
				>
					Settings UI
				</Text>
			</View>
			<View style={{ flex: 1, backgroundColor: 'green' }}>
				<SectionList />
			</View>
		</View>
	);
}

export default Setting;
