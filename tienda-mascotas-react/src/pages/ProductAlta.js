import { useState } from "react";
import AlertCustom from "../components/forms/AlertCustom";
import FormGroup from "../components/forms/FormGroup";
import ButtonWithLoading from "../components/forms/ButtonWithLoading";
import { Link } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import { createProduct } from "../services/ProductServices";

export default function ProductAlta() {
  const [datos, setDatos] = useState({ name: "", price: "", image: "", description: "" });
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const [spinner, setSpinner] = useState(false);
  let errFlag;
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

    // validacion

    errFlag = true;
    if (datos.name === "") {
      setAlert({ variant: "danger", text: "El campo nombre es obligatorio." });
      return;
    }
    if (datos.price <= 0) {
      setAlert({ variant: "danger", text: "El precio debe ser mayor que 0." });
      return;
    }
    if (datos.image === "") {
      datos.image = "https://cdn.discordapp.com/attachments/989026778741899287/990371395198410812/sqrpop.png";
    }
    if (datos.description === "") {
      setAlert({ variant: "danger", text: "Ingrese una descripción válida." });
      return;
    }
    errFlag = false;
    if (!errFlag) setAlert({ variant: "", text: "" });
    //fin validacion

    console.log(datos);
    setSpinner(true);
    createProduct(datos).then((doc) => {
      console.log(doc);
      setAlert({ variant: "success", text: "Producto creado con éxito" });
      setSpinner(false);
    });
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
          </Form>

          <AlertCustom variant={alert.variant} text={alert.text} />
        </Card.Body>
      </Card>
    </>
  );
}
