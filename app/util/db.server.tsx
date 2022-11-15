// Import the functions you need from the SDKs you need
import admin from 'firebase-admin';
import { applicationDefault, initializeApp as initializeAdminApp } from "firebase-admin/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH7ZeF0VvTyt-7ia10Ouo0jXFO78TuVtc",
    authDomain: "elpuas-recipe-app.firebaseapp.com",
    projectId: "elpuas-recipe-app",
    storageBucket: "elpuas-recipe-app.appspot.com",
    messagingSenderId: "1003426689037",
    appId: "1:1003426689037:web:16a827621f6ac74238e544",
    measurementId: "G-94RMVR50L3"
};

if (!admin.apps.length) {
    initializeAdminApp({
        credential: applicationDefault(),
        databaseURL: "elpuas-recipe-app.firebaseio.com",
    });
}

const db = admin.firestore();

let Firebase

if (!Firebase) {
    Firebase = initializeApp(firebaseConfig)
    getAnalytics(Firebase)
}

export { db }
