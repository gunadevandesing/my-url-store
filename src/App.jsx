import "./App.scss";
import RoutesContainer from "./RoutesContainer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <RoutesContainer />
    </BrowserRouter>
  );
};

export default App;
