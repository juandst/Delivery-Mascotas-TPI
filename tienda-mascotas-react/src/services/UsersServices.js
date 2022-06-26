import firebase from "../config/firebase";

export function createUser(email, password) {
  return firebase.auth.createUserWithEmailAndPassword(email, password);
}

export function addUserToDb(data, form) {
  return firebase.db.collection("usuarios").add({
    nombre: form.nombre,
    apellido: form.apellido,
    email: form.email,
    userId: data.user.uid,
    isAdmin: false,
  });
}

export function authUser(email, password) {
  return firebase.auth.signInWithEmailAndPassword(email, password);
}

export function signOutUser() {
  return firebase.auth.signOut();
}
