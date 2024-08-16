import React from 'react';
import { Setting, FoodList, ProductGridView } from '../screens';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fontSize, colors } from '../constants';

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => {
	return {
		headerShown: false,
		tabBarActiveTintColor: colors.primary,
		tabBarInactiveTintColor: colors.gray,
	};
};

function UITab(props) {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen name="ProductGridView" component={ProductGridView} />
			<Tab.Screen name="FoodList" component={FoodList} />
			<Tab.Screen name="Setting" component={Setting} />
		</Tab.Navigator>
	);
}

export default UITab;
