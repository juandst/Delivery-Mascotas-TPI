import OptionsMenu from "./OptionsMenu";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Menu = ({ options }) => {
  return (
    <>
      <Navbar bg="bg-danger" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"} style={{ color: "black" }}>
            DELIVERY MASCOTAS
          </Navbar.Brand>
          <Nav className="me-auto">
            {options.map((option, index) => (
              <OptionsMenu key={index} opc={option} />
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
