import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
