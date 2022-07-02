import NetContext from "../context/NetContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import FormGroup from "../components/forms/FormGroup";
import ButtonWithLoading from "../components/forms/ButtonWithLoading";
import AlertCustom from "../components/forms/AlertCustom";
import { authUser } from "../services/UsersServices";

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
    e.target.disabled = true;
    setSpinner(true);
    let email = form.email;
    let password = form.password;
    authUser(email, password)
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
        e.target.disabled = false;
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
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
      <Card.Footer>
        ¿No tienes una cuenta? <Link to={"/register"}>Crea una</Link>
      </Card.Footer>
    </Card>
  );
};
export default Login;
