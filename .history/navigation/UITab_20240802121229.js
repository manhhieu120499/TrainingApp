import React from 'react';
import { Setting, FoodList, ProductGridView } from '../screens';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fontSize, colors } from '../constants';

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => {
	return {
		headerShown: false,
		tabbarActiveTintColor: colors.primary,
	};
};

function UITab(props) {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="ProductGridView" component={ProductGridView} />
			<Tab.Screen name="FoodList" component={FoodList} />
			<Tab.Screen name="Setting" component={Setting} />
		</Tab.Navigator>
	);
}

export default UITab;
