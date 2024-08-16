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
		tabBarActiveTintColor: 'white',
		tabBarInactiveTintColor: colors.gray,
		tabBarIcon: ({ focused, color, size }) => {
			const navbar = {
				ProductGridView: (
					<Icon
						name="product-hunt"
						size={20}
						color={focused == true ? 'white' : color}
					/>
				),
				FoodList: (
					<Icon
						name="utensils"
						size={20}
						color={focused == true ? 'white' : color}
					/>
				),
				Setting: (
					<Icon
						name="cogs"
						size={20}
						color={focused == true ? 'white' : color}
					/>
				),
			};
			return navbar[route.name];
		},
		tabBarStyle: { backgroundColor: colors.seller },
	};
};

function UITab(props) {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="ProductGridView"
				component={ProductGridView}
				options={{
					tabBarLabel: 'Products',
					tabBarLabelStyle: {
						fontSize: fontSize.h3,
					},
				}}
			/>
			<Tab.Screen
				name="FoodList"
				component={FoodList}
				options={{
					tabBarLabel: 'Foods',
				}}
			/>
			<Tab.Screen
				name="Setting"
				component={Setting}
				options={{
					tabBarLabel: 'Settings',
				}}
			/>
		</Tab.Navigator>
	);
}

export default UITab;
