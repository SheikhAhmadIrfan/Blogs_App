import "./Login.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate('/home');
  };
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="signupimg">
            <img src={logo} alt="" />
          </div>
          <h2 className="login-title">Login</h2>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            className="login-input"
          />
          <input
            className="login-input"
            type="password"
            placeholder="Enter Password"
            id="password"
          />
          <button className="login-button" onClick={handlelogin} >Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
