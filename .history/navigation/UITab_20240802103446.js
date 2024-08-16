import React from 'react';
import { Setting, FoodList, ProductGridView } from '../screens';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fontSize, colors } from '../constants';

function UITab(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View style={{ flex: 1, backgroundColor: 'red' }}>
				<Text>Content</Text>
			</View>
			<View style={{ height: 60, backgroundColor: 'green' }}>
				<Text>Navbar</Text>
			</View>
		</View>
	);
}

export default UITab;
