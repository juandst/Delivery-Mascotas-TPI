import { Link } from "react-router-dom";
import "../../App.css";

export default function OptionsMenu({ opc }) {
  return (
    <ul>
      <Link to={opc.path} style={{ textDecoration: "none" }}>
        <li>{opc.label}</li>
      </Link>
    </ul>
  );
}
