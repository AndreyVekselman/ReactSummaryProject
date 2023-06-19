import { useNavigate } from "react-router-dom";

const SignOut = ({ onSignOut }) => {
  const navigate = useNavigate();
  onSignOut();
  navigate("/");
  return null;
};

export default SignOut;
