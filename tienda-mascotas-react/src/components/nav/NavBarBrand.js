import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBarBrand() {
  return (
    <Navbar.Brand as={Link} to={"/"} style={{ color: "black" }}>
      <img
        src="https://cdn.discordapp.com/attachments/989026778741899287/989027599529418802/1494353.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="WEB-LOGO"
      />{" "}
      DELIVERY MASCOTAS
    </Navbar.Brand>
  );
}
