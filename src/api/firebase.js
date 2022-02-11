import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app'
import { getStorage } from 'firebase/storage';  // <----
import { getFirestore, collection, getDocs } from 'firebase/firestore';
export const firebaseConfig = {
    apiKey: "API here",
    authDomain: ".....",
    databaseURL: "...",
    projectId: ".....",
    storageBucket: ".....",
    messagingSenderId: "....",
    appId: "........."
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
