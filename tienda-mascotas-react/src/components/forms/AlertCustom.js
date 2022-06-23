import { Alert } from "react-bootstrap";

export default function AlertCustom({ variant, text }) {
  return (
    <Alert variant={variant} style={{ marginTop: "10px" }}>
      {text}
    </Alert>
  );
}
