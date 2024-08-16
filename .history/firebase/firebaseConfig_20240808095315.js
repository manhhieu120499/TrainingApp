import { initializeApp } from 'firebase/app';
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

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
const auth = getAuth();
const firebaseDatabase = getDatabase();

export { auth, firebaseDatabase, createUserWithEmailAndPassword };
