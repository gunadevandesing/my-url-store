import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebaseConfig/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

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

  const [user] = useAuthState(auth);

  useEffect(() => {
    const isAuth = sessionStorage.getItem("isAuth")
      ? JSON.parse(sessionStorage.getItem("isAuth"))
      : false;

    dispatch(setAuthorization(isAuth));
  }, [dispatch]);

  useEffect(() => {
    if (!user) navigate("/login");
    else navigate("/links");
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/links" element={<LinksHomePage />} />
      <Route path="*" element={<UnAuthorizedPage />} />
    </Routes>
  );
};

export default RoutesContainer;
