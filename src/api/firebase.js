import { initializeApp } from "firebase/app";

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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const allData=[];
const getAll = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    // console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        allData.push(doc.data().name);
    });
}
getAll();

export const categories = allData;