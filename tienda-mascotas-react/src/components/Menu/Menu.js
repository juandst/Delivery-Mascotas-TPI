import OptionsMenu from "./OptionsMenu";
import NetContext from "../../context/NetContext";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavBarBrand from "../nav/NavBarBrand";
import ExitButton from "./ExitButton";

const Menu = () => {
  return (
    <>
      <NetContext.Consumer>
        {(context) => (
          <Navbar bg="bg-danger" variant="dark">
            <Container>
              <Nav className="me-auto">
                <NavBarBrand />
                {context.isAdmin && <OptionsMenu opc={{ label: "Alta", path: "/product/alta" }} />}
                {context.login && <ExitButton logOut={context.logoutUser}>Salir</ExitButton>}

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
