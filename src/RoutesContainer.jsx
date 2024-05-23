import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const LinksHomePage = lazy(() => import("./Pages/LinksHomePage/LinksHomePage"));
const UnAuthorizedPage = lazy(() =>
  import("./Pages/UnAuthorizedPage/UnAuthorizedPage")
);

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorization } from "./redux/Authorization/authorizationSlice";

const RoutesContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authorizationSelector = useSelector((store) => store.authorization);
  const { isAuthorized } = authorizationSelector;

  useEffect(() => {
    const isAuth = sessionStorage.getItem("isAuth")
      ? JSON.parse(sessionStorage.getItem("isAuth"))
      : false;

    dispatch(setAuthorization(isAuth));
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthorized) navigate("/login");
    else navigate("/links");
  }, [isAuthorized]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/links" element={<LinksHomePage />} />
      <Route path="*" element={<UnAuthorizedPage />} />
    </Routes>
  );
};

export default RoutesContainer;
