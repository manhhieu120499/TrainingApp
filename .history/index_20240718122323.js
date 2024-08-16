/**
 * @format
 */

import React from 'react';
// eslint-disable-next-line prettier/prettier
import { Text } from 'react-native';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainScreen from './screens/MainScreen'

// eslint-disable-next-line prettier/prettier
AppRegistry.registerComponent(appName, () => ()=> <Text>Hello Anh em F8</Text>);
