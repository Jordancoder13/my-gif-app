// lib/firebase.js
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5QkkkMXpBXXhJss0nrMqG-9w1424KKrI",
  authDomain: "my-gif-app-50211.firebaseapp.com",
  projectId: "my-gif-app-50211",
  storageBucket: "my-gif-app-50211.appspot.com",
  messagingSenderId: "192920876063",
  appId: "1:192920876063:web:65762de66c948437ff512a",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
