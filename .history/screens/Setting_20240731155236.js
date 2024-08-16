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
		{
			title: 'Account',
			item: [
				{
					name: 'Phone number',
					icon: 'phone',
				},
				{
					name: 'Email',
					icon: 'envelope',
				},
				{
					name: 'Sign out',
					icon: 'sign-in',
				},
			],
		},
		{
			title: 'Security',
			item: [
				{
					name: 'Lock app in background',
					icon: 'mobile-android-alt',
					toggleOn: 'toggle-on',
					toggleOff: 'toggle-off',
				},
				{
					name: 'Use fingerprint',
					icon: 'fingerprint',
					toggleOn: 'toggle-on',
					toggleOff: 'toggle-off',
				},
				{
					name: 'Change password',
					icon: 'lock',
					toggleOn: 'toggle-on',
					toggleOff: 'toggle-off',
				},
			],
		},
	]);

	let { item } = settings;
	console.log(item);
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
				<SectionList
					data={settings}
					renderItem={({ item }) => {
						return item.map((setting) => (
							<Text>{setting.name}</Text>
						));
					}}
					renderSectionHeader={({ title }) => <Text>{title}</Text>}
				/>
			</View>
		</View>
	);
}

export default Setting;
