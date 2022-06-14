import OptionsMenu from "./OptionsMenu";

const Menu = ({ options }) => {
  return (
    <div>
      {options.map((opction, index) => (
        <OptionsMenu key={index} opc={opction} />
      ))}
    </div>
  );
};

export default Menu;
