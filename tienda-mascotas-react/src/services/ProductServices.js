import firebase from "../config/firebase";

export function getProducts() {
  return firebase.db.collection("productos").get();
}

export function getProduct(id) {
  return firebase.db.doc("productos/" + id).get();
}

export function createProduct(data) {
  return firebase.db.collection("productos").add(data);
}

export function updateProduct(id, datos) {
  return firebase.db.doc("productos/" + id).set(
    {
      name: datos.name,
      price: datos.price,
      image: datos.image,
      description: datos.description,
    },
    { merge: true }
  );
}

export function deleteProduct(id) {
  return firebase.db.doc("productos/" + id).delete();
}
