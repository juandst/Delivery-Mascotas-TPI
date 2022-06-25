import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../config/firebase";

export default function ProductEdit() {
  const id = useParams().id;
  const [datos, setDatos] = useState({ name: "", price: "" });
  useEffect(() => {
    firebase.db
      .doc("productos/" + id)
      .get()
      .then((doc) => {
        setDatos(doc.data());
      });
  }, [id]);

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
      .doc("productos/" + id)
      .set(
        {
          name: datos.name,
          price: datos.price,
        },
        { merge: true }
      )
      .then((doc) => {
        console.log(doc);
      });
    e.preventDefault();
  };

  const handleDelete = (e) => {
    firebase.db
      .doc("productos/" + id)
      .delete()
      .then((doc) => {
        console.log(doc);
      });
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
        <button onClick={handleDelete}>Eliminar</button>
      </form>
    </>
  );
}
