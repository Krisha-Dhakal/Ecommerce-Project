import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../hooks/customContextHook/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
