import { initializeApp } from 'firebase/app';
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
// ref = reference to a 'collection'
import {
	getDatabase,
	ref as firebaseDatabaseRef,
	set as firebaseSet,
} from 'firebase/database';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCIOh7b6Tanhe7MFIcpPtaeZ0qNCtwbEes',
	authDomain: 'traningappreactnative.firebaseapp.com',
	databaseURL:
		'https://traningappreactnative-default-rtdb.asia-southeast1.firebasedatabase.app/',
	projectId: 'traningappreactnative',
	storageBucket: 'traningappreactnative.appspot.com',
	messagingSenderId: '50127502160',
	appId: '1:50127502160:android:57b8d2a61875a12c4b0a55',
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const firebaseDatabase = getDatabase();

export {
	auth,
	firebaseDatabase,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	firebaseDatabaseRef,
	firebaseSet,
};
