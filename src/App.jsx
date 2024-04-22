import { useEffect } from "react";
import "./App.scss";
import RoutesContainer from "./RoutesContainer";
import { redirect } from "react-router-dom";

const App = () => {
  const isAuth = sessionStorage.getItem("isAuth")
    ? JSON.parse(sessionStorage.getItem("isAuth"))
    : false;

  useEffect(() => {
    if (!isAuth) {
      redirect("/login");
    }
  }, [isAuth]);

  return <RoutesContainer />;
};

export default App;
