import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth.context";

const SignOut = ({ rederect }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    navigate(rederect);
  }, [navigate, logout, rederect]);

  return null;
};

export default SignOut;
