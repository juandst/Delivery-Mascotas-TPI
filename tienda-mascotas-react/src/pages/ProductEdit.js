import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../config/firebase";
import { Card, Form, Button } from "react-bootstrap";
import FormGroup from "../components/forms/FormGroup";

export default function ProductEdit() {
  const id = useParams().id;
  const [datos, setDatos] = useState({ name: "", price: "", image: "", description: "" });
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
    e.preventDefault();
    console.log(datos);
    firebase.db
      .doc("productos/" + id)
      .set(
        {
          name: datos.name,
          price: datos.price,
          image: datos.image,
          description: datos.description,
        },
        { merge: true }
      )
      .then((doc) => {
        console.log(doc);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    firebase.db
      .doc("productos/" + id)
      .delete()
      .then((doc) => {
        console.log(doc);
      });
  };

  return (
    <Card style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <FormGroup name="name" type="text" value={datos.name} onChange={handleChange}>
            Nombre:
          </FormGroup>
          <FormGroup name="price" type="text" value={datos.price} onChange={handleChange}>
            Precio:
          </FormGroup>
          <FormGroup name="img" type="url" value={datos.image} onChange={handleChange}>
            Imagen:
          </FormGroup>
          <FormGroup name="desc" type="text" value={datos.description} onChange={handleChange}>
            Descripción:
          </FormGroup>
          <Button type="submit">Guardar</Button>
          <Button onClick={handleDelete}>Eliminar</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
