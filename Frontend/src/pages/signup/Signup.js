import "./Signup.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlesignup = async (e) => {
    e.preventDefault()
    const data={
      name:name,
      username:email,
      password:password
    }
    try {
      await axios.post("http://localhost:8000/signup", data);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="logincontainer">
      <div className="loginwrapper">
        <div className="signupimg">
          <img src={logo} alt="" />
        </div>
        <form onSubmit={handlesignup}>
          <div className="emailopt">
            <label htmlFor="text" className="labellogin">
              Enter Name
            </label>
            <input
              className="linp loginemail"
              type="text"
              name="username"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="emailbtn">
            <button className="loginbtn"  type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
