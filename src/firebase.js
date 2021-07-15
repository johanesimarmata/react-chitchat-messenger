import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA_3Ah2YF7nXACb-tjt5DIpLNN2uMCpDok",
    authDomain: "chitchat-7b3c1.firebaseapp.com",
    projectId: "chitchat-7b3c1",
    storageBucket: "chitchat-7b3c1.appspot.com",
    messagingSenderId: "739776261474",
    appId: "1:739776261474:web:4f5bb08f4613091272503b"
}).auth();

