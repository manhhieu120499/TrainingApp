import React from 'react';
import { Setting, FoodList, ProductGridView } from '../screens';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fontSize, colors } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => {
	return {
		headerShown: false,
		tabBarActiveTintColor: colors.primary,
		tabBarInactiveTintColor: colors.gray,
		tabBarIcon: ({ focused, color, size }) => {
			return (
				<Icon
					name="product-hunt"
					size={20}
					color={focused == true ? colors.primary : 'gray'}
				/>
			);
		},
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
