/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainScreen from './screens/MainScreen';
import React from 'react';

AppRegistry.registerComponent(appName, () => <MainScreen x={1} y ={2}/>);
