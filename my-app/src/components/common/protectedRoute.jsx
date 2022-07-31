import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const ProtectedRoute = ({ children, bizOnly = false }) => {
  const { user } = useAuthContext();

  if (!user || (bizOnly && !user.biz)) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
