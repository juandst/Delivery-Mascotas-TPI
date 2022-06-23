import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db = db;
export default firebase; // Run: git update-index --assume-unchanged // credentials should be set on demand
