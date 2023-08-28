import logo from "../../assets/logo.jpg";
import "./Start.css";
import { useNavigate } from "react-router-dom";
const Start = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="signupimg">
            <img src={logo} alt="" />
          </div>
          <h2 className="login-title">Welcome</h2>
          <button className="login-button" onClick={()=>navigate('/signup')}>Sign up</button>
          <span className="startspan">OR</span>
          <button className="login-button" onClick={()=>navigate('/login')}>Login</button>
        </div>
      </div>
    </>
  );
};
export default Start;
