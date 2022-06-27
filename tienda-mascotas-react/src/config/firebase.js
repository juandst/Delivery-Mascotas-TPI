import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0Yjl7cyZ3QS3DkoGZnF3QGNkX0Adml6I",
  authDomain: "tup-tp-react.firebaseapp.com",
  projectId: "tup-tp-react",
  storageBucket: "tup-tp-react.appspot.com",
  messagingSenderId: "424279241654",
  appId: "1:424279241654:web:12a8ed0f4b730a07e44717",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db = db;
export default firebase;
