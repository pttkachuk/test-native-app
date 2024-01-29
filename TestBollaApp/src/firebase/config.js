import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBJGpJR5qyXcPwZUK-U5CeYSyzNBrsPx-o",
    authDomain: "technebollaapp.firebaseapp.com",
    projectId: "technebollaapp",
    storageBucket: "technebollaapp.appspot.com",
    messagingSenderId: "598287086773",
    appId: "1:598287086773:web:45c8167ffb976d5bedbafc",
    measurementId: "G-NVTPXEE1X6"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});