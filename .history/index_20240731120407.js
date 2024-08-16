/**
 * @format
 */
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import {
	Welcome,
	Login,
	Register,
	FoodList,
	ProductGridView,
	Setting,
} from './screens';
import React from 'react';

// const fakeApi = [
//     {
//         productName: 'iphone 13',
//         price: 1000,
//         quantity: 10,
//     },
//     {
//         productName: 'iphone 13',
//         price: 1000,
//         quantity: 10,
//     }
// ]

// AppRegistry.registerComponent(appName, () => () =>
//     <MainScreen
//             x ={1} y ={2}
//             person= {{
//                 name: 'John',
//                  age: 30,
//             }}
//             products = {fakeApi}
//     />
// );

AppRegistry.registerComponent(appName, () => () => <Setting />);
