import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const LinksHomePage = lazy(() => import("./Pages/LinksHomePage/LinksHomePage"));
const UnAuthorizedPage = lazy(() =>
  import("./Pages/UnAuthorizedPage/UnAuthorizedPage")
);

const RoutesContainer = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/links" element={<LinksHomePage />} />
        <Route path="*" element={<UnAuthorizedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
