import { Form } from "react-bootstrap";

export default function FormGroup({ children, name, type, placeholder, value, onChange }) {
  return (
    <Form.Group controlId={"formBasic" + name}>
      <Form.Label>{children}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
    </Form.Group>
  );
}
