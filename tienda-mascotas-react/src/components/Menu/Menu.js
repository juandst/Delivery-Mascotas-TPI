import OptionsMenu from "./OptionsMenu";
import NetContext from "../../context/NetContext";
import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavBarBrand from "../nav/NavBarBrand";
import ExitButton from "./ExitButton";
import SearchBar from "../nav/SearchBar";
import ImageNav from "../nav/ImageNav";

const Menu = () => {
  const context = useContext(NetContext);
  return (
    <Nav>
      <Navbar bg="bg-danger" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavBarBrand />
            <SearchBar />
          </Nav>
        </Container>
        {context.isAdmin && (
          <OptionsMenu
            opc={{
              label: <ImageNav src="https://cdn.discordapp.com/attachments/989026778741899287/992609380199579668/add.png" alt="Alta" />,
              path: "/product/alta",
            }}
          />
        )}

        {!context.login && (
          <>
            <OptionsMenu opc={{ label: "Ingresar", path: "/login" }} />
            <OptionsMenu opc={{ label: "Registro", path: "/register" }} />
          </>
        )}
        {context.login && <ExitButton logOut={context.logoutUser}>Cerrar sesión</ExitButton>}
      </Navbar>
    </Nav>
  );
};

export default Menu;
