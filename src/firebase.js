import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWBTzKAo00noHn9PPWVGi-UcbrdfXnDe0",
    authDomain: "chatroom-svelte.firebaseapp.com",
    projectId: "chatroom-svelte",
    storageBucket: "chatroom-svelte.appspot.com",
    messagingSenderId: "753485262131",
    appId: "1:753485262131:web:8cebe46a10348fbfede246"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();