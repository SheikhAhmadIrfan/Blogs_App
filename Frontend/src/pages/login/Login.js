import "./Login.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("tehreemshahid12");
  const [password, setPassword] = useState("12345");
  const navigate = useNavigate();
  const handlelogin = async () => {
    const data = {
      username: email,
      password: password,
    };
    try {
      const response = await axios.post("http://localhost:8000/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = {
        id: response.data.id,
        token: response.data.accessToken,
        email,
      };
      props.handletoken(result);
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
    }
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Enter Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handlelogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
