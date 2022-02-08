import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app'
import { getStorage } from 'firebase/storage';  // <----
import { getFirestore, collection, getDocs } from 'firebase/firestore';
export const firebaseConfig = {
    apiKey: "AIzaSyAL78UGSHR5MDMSmxFG2teA5Xdo2_jk5Rs",
    authDomain: "authentication-50462.firebaseapp.com",
    databaseURL: "https://authentication-50462.firebaseio.com",
    projectId: "authentication-50462",
    storageBucket: "authentication-50462.appspot.com",
    messagingSenderId: "415779728307",
    appId: "1:415779728307:web:e3dec1e905849065"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)