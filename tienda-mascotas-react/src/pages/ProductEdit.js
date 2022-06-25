import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import firebase from "../config/firebase";
import { Card, Form, Button } from "react-bootstrap";
import FormGroup from "../components/forms/FormGroup";
import AlertCustom from "../components/forms/AlertCustom";
import ButtonWithLoading from "../components/forms/ButtonWithLoading";

export default function ProductEdit() {
  const id = useParams().id;
  const [datos, setDatos] = useState({ name: "", price: "", image: "", description: "" });
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const [spinner, setSpinner] = useState(false);
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
    setSpinner(true);
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
        setAlert({ variant: "success", text: "Producto editado con exito" });
        setSpinner(false);
      })
      .catch((err) => {
        setAlert({ variant: "danger", text: "Error: " + err });
        setSpinner(false);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    firebase.db
      .doc("productos/" + id)
      .delete()
      .then(() => {
        setAlert({ variant: "success", text: "Producto eliminado con exito" });
      })
      .catch((err) => setAlert({ variant: "danger", text: "Error: " + err }));
  };

  return (
    <>
      <Link to={"/"}>
        <Button variant="warning" style={{ margin: "10px" }}>
          Volver
        </Button>
      </Link>
      <Card style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <FormGroup name="name" type="text" value={datos.name} onChange={handleChange}>
              Nombre:
            </FormGroup>
            <FormGroup name="price" type="number" value={datos.price} onChange={handleChange}>
              Precio:
            </FormGroup>
            <FormGroup name="image" type="url" value={datos.image} onChange={handleChange}>
              Imagen:
            </FormGroup>
            <FormGroup name="description" type="text" value={datos.description} onChange={handleChange}>
              Descripción:
            </FormGroup>
            <ButtonWithLoading text="Guardar" loading={spinner} variant="warning" type="submit" />
            <Button variant="warning" onClick={handleDelete} style={{ marginTop: "10px", marginLeft: "10px" }}>
              Eliminar
            </Button>
          </Form>
          <AlertCustom variant={alert.variant} text={alert.text} />
        </Card.Body>
      </Card>
    </>
  );
}
