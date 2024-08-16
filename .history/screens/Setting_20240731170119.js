import { ScrollView, SectionList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize } from '../constants';
import { useEffect, useState } from 'react';
import { SettingItem, UIHeader } from '../components';

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

	useEffect(() => {
		settings.map((setting) => {
			let { title, item } = setting;
			console.log(title, item);
		});
	});

	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<UIHeader title={'Settings UI'} />
			<ScrollView>
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
					<View
						style={{ flexDirection: 'row', alignItems: 'center' }}
					>
						<Icon name="globe" size={20} />
						<Text
							style={{ fontSize: fontSize.h4, marginStart: 10 }}
						>
							Language
						</Text>
					</View>
					<View
						style={{ flexDirection: 'row', alignItems: 'center' }}
					>
						{/* <Text style={{ fontSize: fontSize.h4, marginEnd: 10 }}>
							English
						</Text>
						<Icon name="chevron-right" size={15} /> */}
						<Icon name="toggle-on" size={35} color={'red'} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

export default Setting;
