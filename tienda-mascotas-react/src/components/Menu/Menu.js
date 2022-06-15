import OptionsMenu from "./OptionsMenu";

const Menu = ({ options }) => {
  return (
    <nav>
      <h2>Delivery Mascotas</h2>
      <h3>Tienda online</h3>
      <div>
        {options.map((option, index) => (
          <OptionsMenu key={index} opc={option} />
        ))}
      </div>
    </nav>
  );
};

export default Menu;
