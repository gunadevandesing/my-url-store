import { useDispatch } from "react-redux";
import { setAuthorization } from "../../redux/Authorization/authorizationSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    sessionStorage.setItem("isAuth", true);
    dispatch(setAuthorization(true));
  };

  return (
    <>
      Login
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default LoginPage;
