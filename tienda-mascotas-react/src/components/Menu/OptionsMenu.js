import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function OptionsMenu({ opc }) {
  return (
    <Nav.Link
      as={Link}
      to={opc.path}
      style={{ color: "black", fontWeight: "bold" }}
    >
      {opc.label}
    </Nav.Link>
  );
}
