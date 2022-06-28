import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import FormGroup from "../components/forms/FormGroup";
import ButtonWithLoading from "../components/forms/ButtonWithLoading";
import AlertCustom from "../components/forms/AlertCustom";
import { Link } from "react-router-dom";
import { addUserToDb, createUser } from "../services/UsersServices";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const [spinner, setSpinner] = useState(false);
  let errFlag = false;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion

    errFlag = true;
    if (form.nombre === "") {
      setAlert({ variant: "danger", text: "El campo nombre es obligatorio." });
      return;
    } else if (form.apellido === "") {
      setAlert({ variant: "danger", text: "El campo apellido es obligatorio." });
      return;
    } else if (form.email === "") {
      setAlert({ variant: "danger", text: "El campo email es obligatorio." });
      return;
    } else if (form.password === "") {
      setAlert({ variant: "danger", text: "Por favor, ingrese una contraseña" });
      return;
    }

    if (form.password.length < 6) {
      setAlert({ variant: "danger", text: "La contraseña debe tener 6 caracteres como mínimo" });
      return;
    }
    errFlag = false;
    if (!errFlag) {
      setAlert({ variant: "", text: "" });
    }
    //fin validacion
    setSpinner(true);
    let email = form.email;
    let password = form.password;
    createUser(email, password)
      .then((data) => {
        console.log("Usuario creado con éxito");
        addUserToDb(data, form)
          .then(() => {
            setSpinner(false);
            setAlert({ variant: "success", text: "Usuario creado con éxito, redirigiendo a la página de inicio de sesión..." });
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
            setSpinner(false);
            setAlert({ variant: "danger", text: "Error: " + err });
          });
      })
      .catch((error) => {
        console.log("Error: ", error);
        setSpinner(false);
        setAlert({ variant: "danger", text: "Error: " + error });
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
        <Card.Title>Registrarse</Card.Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup name="nombre" type="text" placeholder="Ingrese un nombre" value={form.nombre} onChange={handleChange}>
            Nombre
          </FormGroup>

          <FormGroup type="text" placeholder="Ingresar apellido" name="apellido" value={form.apellido} onChange={handleChange}>
            Apellido
          </FormGroup>

          <FormGroup type="email" placeholder="Ingrese Email" name="email" value={form.email} onChange={handleChange}>
            Email
          </FormGroup>

          <FormGroup type="password" placeholder="Contraseña" name="password" value={form.password} onChange={handleChange}>
            Contraseña
          </FormGroup>
          <ButtonWithLoading text="Registrarse" loading={spinner} variant="warning" type="submit" />
        </Form>
        <AlertCustom variant={alert.variant} text={alert.text} />
      </Card.Body>
      <Card.Footer>
        ¿Ya tienes una cuenta? <Link to={"/login"}>Inicia sesión</Link>
      </Card.Footer>
    </Card>
  );
};
export default Register;
