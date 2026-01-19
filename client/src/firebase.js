import {initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore/lite"

const config = {
    apiKey: "AIzaSyByH4qKb4ZjdevEbd87OKKCxtF3D2vrdU4",
    authDomain: "mern-micro-twitter.firebaseapp.com",
    databaseURL: "https://mern-micro-twitter.firebaseio.com",
    projectId: "mern-micro-twitter",
    storageBucket: "mern-micro-twitter.appspot.com",
    messagingSenderId: "76015289306",
    appId: "1:76015289306:web:2f15139f3ab9635714b6e3",
    measurementId: "G-9DP6JZ1ZKG"
}

const app = initializeApp(config);

const storage = getFirestore(app);

export {
    storage,
    app
}
