import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct, updateProduct, deleteProduct } from "../services/ProductServices";
import { Card, Form, Button } from "react-bootstrap";
import FormGroup from "../components/forms/FormGroup";
import AlertCustom from "../components/forms/AlertCustom";
import ButtonWithLoading from "../components/forms/ButtonWithLoading";

const ProductEdit = () => {
  const id = useParams().id;
  const [datos, setDatos] = useState({ name: "", price: "", image: "", description: "" });
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const [spinner, setSpinner] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    getProduct(id).then((doc) => {
      setDatos(doc.data());
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(isDeleted);
    e.preventDefault();
    setSpinner(true);
    console.log(datos);
    updateProduct(id, datos)
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
    if (window.confirm("¿Está seguro de eliminar el producto?")) {
      e.target.disabled = true;
      deleteProduct(id)
        .then(() => {
          setAlert({ variant: "success", text: "Producto eliminado con exito" });
          setIsDeleted(true);
        })
        .catch((err) => setAlert({ variant: "danger", text: "Error: " + err }));
    }
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
          {!isDeleted && (
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
              <Form.Label>Descripción: </Form.Label>
              <Form.Control as="textarea" rows={3} name="description" type="text" value={datos.description} onChange={handleChange} />
              <ButtonWithLoading text="Guardar" loading={spinner} variant="warning" type="submit" />
              <Button variant="warning" onClick={handleDelete} style={{ marginTop: "10px", marginLeft: "10px" }}>
                Eliminar
              </Button>
            </Form>
          )}
          <AlertCustom variant={alert.variant} text={alert.text} />
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductEdit;
