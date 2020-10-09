import * as React from 'react'
import * as firebase from 'firebase'
import firebaseApp from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDrfyv7f0UUjwj5MvrFBbbePEa2AkCQAEw",
    authDomain: "fir-phoneauth-5599d.firebaseapp.com",
    databaseURL: "https://fir-phoneauth-5599d.firebaseio.com",
    projectId: "fir-phoneauth-5599d",
    storageBucket: "fir-phoneauth-5599d.appspot.com",
    messagingSenderId: "101590223426",
    appId: "1:101590223426:web:c73347f4c43593c506bbdb"
};
// Initialize Firebase
firebaseApp.initializeApp(firebaseConfig);

export default () => {
    return { firebaseApp, auth }
}

