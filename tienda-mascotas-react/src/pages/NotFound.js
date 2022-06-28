import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const NotFound = () => (
  <Card style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
    <Card.Body>
      <Card.Title>404 page not found</Card.Title>
      <Card.Text>La página solicitada no existe.</Card.Text>
      <Card.Img
        src="https://cdn.discordapp.com/attachments/989026778741899287/990379379580358697/comprar-un-perro.jpg"
        alt="perrito"
        style={{ maxWidth: "25%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto" }}
      ></Card.Img>
      <Link to={"/"}>
        <Button variant="warning">Volver</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default NotFound;
