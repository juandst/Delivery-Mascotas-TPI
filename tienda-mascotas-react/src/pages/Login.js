import firebase from "../config/firebase";
import NetContext from "../context/NetContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import FormGroup from "../components/forms/FormGroup";
import ButtonWithLoading from "../components/forms/ButtonWithLoading";
import AlertCustom from "../components/forms/AlertCustom";

const Login = () => {
  const context = useContext(NetContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    let email = form.email;
    let password = form.password;
    firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        setSpinner(false);
        setAlert({ variant: "success", text: "Bienvenido" });
        context.loginUser(data.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error: ", error);
        setSpinner(false);
        setAlert({ variant: "danger", text: "Ha ocurrido un error: " + error });
      });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Card style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
      <Card.Body>
        <Card.Title>Ingresar</Card.Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup type="email" placeholder="Ingrese Email" name="email" value={form.email} onChange={handleChange}>
            Email
          </FormGroup>

          <FormGroup type="password" placeholder="Contraseña" name="password" value={form.password} onChange={handleChange}>
            Contraseña
          </FormGroup>

          <ButtonWithLoading text="Ingresar" loading={spinner} variant="warning" type="submit" />
        </Form>
        <AlertCustom variant={alert.variant} text={alert.text} />
      </Card.Body>
    </Card>
  );
};
export default Login;
