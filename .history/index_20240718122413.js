/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainScreen from './screens/MainScreen';

// eslint-disable-next-line prettier/prettier
AppRegistry.registerComponent(appName, () => MainScreen);
