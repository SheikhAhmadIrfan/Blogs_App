import "./Signup.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handlesignup = () => {
    navigate('/login');
  };
  return (
    <div className="logincontainer">
      <div className="loginwrapper">
        <div className="signupimg">
          <img src={logo} alt="" />
        </div>
        <form>
          <div className="emailopt">
            <label htmlFor="text" className="labellogin">
              Enter Name
            </label>
            <input
              className="linp loginemail"
              type="text"
              name="username"
              placeholder=""
            />
          </div>
          <div className="emailopt">
            <label htmlFor="email" className="labellogin">
              Email
            </label>
            <input
              className="linp loginemail"
              type="email"
              name="email"
              placeholder="your@gmail.com"
            />
          </div>
          <div className="emailpass">
            <label htmlFor="password" className="labellogin">
              Password
            </label>
            <input
              className="linp loginpassword"
              type="password"
              name="password"
              placeholder="******"
            />
          </div>
          <div className="emailpass">
            <label htmlFor="password" className="labellogin">
              Re-Enter Password
            </label>
            <input
              className="linp loginpassword"
              type="password"
              name="rePassword"
              placeholder="******"
            />
          </div>
          <div className="emailbtn">
            <button className="loginbtn" onClick={handlesignup} >Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
