import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import RoutesWeb from "./components/RoutesWeb/RoutesWeb";
import GlobalState from "./context/GlobalState";
import "./App.css";

const App = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Menu />
        <RoutesWeb />
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;
