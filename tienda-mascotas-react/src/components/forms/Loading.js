import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="loading">
      <Spinner animation="border" variant="warning" style={{ height: "100px", width: "100px" }} />
      <p>
        <strong>CARGANDO</strong>
      </p>
    </div>
  );
}
