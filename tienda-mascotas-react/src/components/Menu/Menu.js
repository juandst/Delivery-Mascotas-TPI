import OptionsMenu from "./OptionsMenu";
import NetContext from "../../context/NetContext";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavBarBrand from "../nav/NavBarBrand";

const Menu = () => {
  return (
    <>
      <NetContext.Consumer>
        {(context) => (
          <Navbar bg="bg-danger" variant="dark">
            <Container>
              <Nav className="me-auto">
                <NavBarBrand></NavBarBrand>
                {context.login && (
                  <Nav.Link onClick={context.logoutUser} style={{ color: "black", fontWeight: "bold" }}>
                    Salir
                  </Nav.Link>
                )}
                {!context.login && (
                  <>
                    <OptionsMenu opc={{ label: "Ingresar", path: "/login" }} />
                    <OptionsMenu opc={{ label: "Registro", path: "/register" }} />
                  </>
                )}
              </Nav>
            </Container>
          </Navbar>
        )}
      </NetContext.Consumer>
    </>
  );
};

export default Menu;
