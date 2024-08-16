import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fontSize, colors } from '../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StackRouter } from '@react-navigation/native';
import { Setting, FoodList, ProductGridView } from '../screens';

const Stack = createNativeStackNavigator();

function App(props) {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="ProductGridView"
					component={ProductGridView}
				/>
				<Stack.Screen name="FoodList" component={FoodList} />
				<Stack.Screen name="Setting" component={Setting} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
