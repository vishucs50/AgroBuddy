import { Navigate } from "react-router";
import { useAuth } from "./authContext";
import Loader from "../components/Loader";
const PrivateRoute = ({ children }) => {
  const { user,loading} = useAuth();
  if(loading) return <Loader/>;
  if (user) return children;

  return <Navigate to="/Login" replace />;
};

export default PrivateRoute;