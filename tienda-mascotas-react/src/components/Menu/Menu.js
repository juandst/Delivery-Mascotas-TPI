import OptionsMenu from "./OptionsMenu";
import NetContext from "../../context/NetContext";
import { useContext } from "react";
import { Container, Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import NavBarBrand from "../nav/NavBarBrand";
import ExitButton from "./ExitButton";

const Menu = () => {
  const context = useContext(NetContext);
  return (
    <Nav>
      <Navbar bg="bg-danger" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavBarBrand />
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success" style={{ border: "none" }}>
                <img
                  style={{ width: "25px", height: "auto" }}
                  src="https://cdn.discordapp.com/attachments/989026778741899287/991826416071090246/magnifying-glass.png"
                  alt="Search"
                />
              </Button>
            </Form>
          </Nav>
        </Container>
        {context.isAdmin && <OptionsMenu opc={{ label: "Alta", path: "/product/alta" }} />}

        {!context.login && (
          <>
            <OptionsMenu opc={{ label: "Ingresar", path: "/login" }} />
            <OptionsMenu opc={{ label: "Registro", path: "/register" }} />
          </>
        )}
        {context.login && (
          <ExitButton logOut={context.logoutUser}>
            <img
              src="https://cdn.discordapp.com/attachments/989026778741899287/991827369532862545/sign-out.png"
              alt="Salir"
              style={{ width: "25px", height: "auto" }}
            />
          </ExitButton>
        )}
      </Navbar>
    </Nav>
  );
};

export default Menu;
