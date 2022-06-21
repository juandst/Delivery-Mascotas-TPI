import firebase from "firebase/app";

const firebaseConfig = {
  // Config goes here
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db = db;
export default firebase;
