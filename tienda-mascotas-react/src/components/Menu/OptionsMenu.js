import { Link } from "react-router-dom";

export default function OptionsMenu({ opc }) {
  return (
    <div>
      {
        <Link to={opc.path}>
          <li>{opc.label}</li>
        </Link>
      }
    </div>
  );
}
