import { useNavigate } from "react-router-dom";
import LoginPage from "../Loginpage";


const LoginForm = () => {
  const navigate = useNavigate();
  return <LoginPage navigate={navigate} />;
};

export default LoginForm;
