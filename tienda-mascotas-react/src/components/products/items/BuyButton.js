import { Button } from "react-bootstrap";

const BuyButton = () => {
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5493413557436", "_blank");
  };

  return (
    <Button variant="warning" onClick={handleClick}>
      COMPRAR
    </Button>
  );
};

export default BuyButton;
