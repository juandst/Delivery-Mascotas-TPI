import { Alert } from "react-bootstrap";

const AlertCustom = ({ variant, text }) => {
  return (
    <Alert variant={variant} style={{ marginTop: "10px" }}>
      {text}
    </Alert>
  );
};

export default AlertCustom;
