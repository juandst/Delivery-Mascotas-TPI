import OptionsMenu from "./OptionsMenu";

const Menu = ({ options }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        {options.map((option, index) => (
          <OptionsMenu key={index} opc={option} />
        ))}
      </div>
      <h3>Tienda online</h3>
    </nav>
  );
};

export default Menu;
