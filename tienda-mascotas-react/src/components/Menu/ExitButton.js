import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ExitButton({ children, logOut }) {
  return (
    <>
      <Nav.Link as={Link} to={"/"} onClick={logOut} style={{ color: "black", fontWeight: "bold" }}>
        {children}
      </Nav.Link>
    </>
  );
}
