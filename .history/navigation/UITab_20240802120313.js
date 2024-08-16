import React from 'react';
import { Setting, FoodList, ProductGridView } from '../screens';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fontSize, colors } from '../constants';

const Tab = createBottomTabNavigator();

function UITab(props) {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="ProductGridView"
				component={ProductGridView}
				style={{ fontSize: fontSize.h3 }}
			/>
			<Tab.Screen name="FoodList" component={FoodList} />
			<Tab.Screen name="Setting" component={Setting} />
		</Tab.Navigator>
	);
}

export default UITab;
