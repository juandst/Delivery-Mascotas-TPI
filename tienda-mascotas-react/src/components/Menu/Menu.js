import OptionsMenu from "./OptionsMenu";

const Menu = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <OptionsMenu key={index} opc={option} />
      ))}
    </div>
  );
};

export default Menu;
