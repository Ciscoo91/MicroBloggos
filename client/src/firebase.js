// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByH4qKb4ZjdevEbd87OKKCxtF3D2vrdU4",
  authDomain: "mern-micro-twitter.firebaseapp.com",
  databaseURL: "https://mern-micro-twitter.firebaseio.com",
  projectId: "mern-micro-twitter",
  storageBucket: "mern-micro-twitter.appspot.com",
  messagingSenderId: "76015289306",
  appId: "1:76015289306:web:2f15139f3ab9635714b6e3",
  measurementId: "G-9DP6JZ1ZKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);