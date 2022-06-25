import { useState } from "react";
import firebase from "../config/firebase";

export default function ProductAlta() {
  const [datos, setDatos] = useState({ name: "", price: "" });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setDatos({
      ...datos,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    console.log(datos);
    firebase.db
      .collection("productos")
      .add(datos)
      .then((doc) => {
        console.log(doc);
      });
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input type="text" name="name" value={datos.name} onChange={handleChange}></input>
        </div>
        <div>
          <label>Precio</label>
          <input type="text" name="price" value={datos.price} onChange={handleChange}></input>
        </div>
        <input type="submit" value="Guardar"></input>
      </form>
    </>
  );
}
