// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// eslint-disable-next-line no-unused-vars
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // eslint-disable-next-line no-undef
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "store-tutorial-c250b.firebaseapp.com",
    projectId: "store-tutorial-c250b",
    storageBucket: "store-tutorial-c250b.appspot.com",
    messagingSenderId: "473704181643",
    appId: "1:473704181643:web:b3cdca9b98fb9f6748098e"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth();