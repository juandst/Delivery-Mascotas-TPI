import { Link } from "react-router-dom";
const NotFound = () => (
  <div>
    <Link to={"/"}>
      <button>Volver</button>
    </Link>
    <h3>404 page not found</h3>
    <p>La página solicitada no existe</p>
    <img src="https://cdn.discordapp.com/attachments/989026778741899287/990379379580358697/comprar-un-perro.jpg" alt="perrito"></img>
  </div>
);

export default NotFound;
