import { ScrollView, SectionList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSize } from '../constants';
import { useEffect, useState } from 'react';
import { SettingItem, UIHeader } from '../components';
import {
	auth,
	firebaseDatabase,
	firebaseDatabaseRef,
} from '../firebase/firebaseConfig';
import { StackActions } from '@react-navigation/native';

function Setting(props) {
	const { navigate, goBack } = props.navigation;
	const [settings, setSettings] = useState([
		{
			title: 'Common',
			item: [
				{
					name: 'Language',
					detail: 'English',
					iconLeft: 'globe',
					iconRight: ['chevron-right'],
				},
				{
					name: 'Environment',
					detail: 'Production',
					iconLeft: 'cloud',
					iconRight: ['chevron-right'],
				},
			],
		},
		{
			title: 'Account',
			item: [
				{
					name: 'Phone number',
					iconLeft: 'phone',
					iconRight: ['chevron-right'],
				},
				{
					name: 'Email',
					iconLeft: 'envelope',
					iconRight: ['chevron-right'],
				},
				{
					name: 'Sign out',
					iconLeft: 'sign-in-alt',
					iconRight: ['chevron-right'],
				},
			],
		},
		{
			title: 'Security',
			item: [
				{
					name: 'Lock app in background',
					iconLeft: 'mobile',
					iconRight: ['toggle-on', 'toggle-off'],
					isActive: true,
				},
				{
					name: 'Use fingerprint',
					iconLeft: 'fingerprint',
					iconRight: ['toggle-on', 'toggle-off'],
					isActive: false,
				},
				{
					name: 'Change password',
					iconLeft: 'lock',
					iconRight: ['toggle-on', 'toggle-off'],
					isActive: false,
				},
			],
		},
		{
			title: 'Misc',
			item: [
				{
					name: 'Terms of Service',
					iconLeft: 'file-alt',
					iconRight: ['chevron-right'],
				},
				{
					name: 'Open source licenses',
					iconLeft: 'deskpro',
					iconRight: ['chevron-right'],
				},
			],
		},
	]);

	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<UIHeader title={'Settings UI'} />
			<ScrollView>
				{settings.map((setting, index) => (
					<SettingItem
						data={setting}
						onPress={(item, title) => {
							let newSettings = settings.map((eachSetting) => {
								if (title == eachSetting.title) {
									return {
										...eachSetting,
										item: eachSetting.item.map(
											(eachItem) => {
												if (
													eachItem.name == item.name
												) {
													return {
														...eachItem,
														isActive:
															!eachItem.isActive,
													};
												} else {
													return eachItem;
												}
											}
										),
									};
								} else {
									return eachSetting;
								}
							});
							setSettings([...newSettings]);
						}}
						onPressToSignOut={() => {
							auth.signOut();
							navigate.dispatch(StackActions.popToTop());
						}}
						key={index}
					/>
				))}
			</ScrollView>
		</View>
	);
}

export default Setting;
