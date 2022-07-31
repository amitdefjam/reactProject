import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const SignOut = ({ redirect }) => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    logout();

    if (redirect) {
      navigate(redirect);
    }
  }, []);

  return null;
};

export default SignOut;
