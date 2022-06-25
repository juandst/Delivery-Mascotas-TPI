import { Link } from "react-router-dom";
const NotFound = () => (
  <div>
    <Link to={"/"}>
      <button>Volver</button>
    </Link>
    <h3>404 page not found</h3>
    <p>La página solicitada no existe</p>
  </div>
);

export default NotFound;
