import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="loading">
      <Spinner animation="border" variant="warning" style={{ height: "100px", width: "100px" }} />
      <p>
        <strong>CARGANDO</strong>
      </p>
    </div>
  );
};

export default Loading;
