import React from 'react';
import { Setting, FoodList, ProductGridView } from '../screens';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fontSize, colors } from '../constants';

function UITab(props) {
	return (
		<View>
			<View>
				<Text>Content</Text>
			</View>
			<View>
				<Text>Navbar</Text>
			</View>
		</View>
	);
}

export default UITab;
