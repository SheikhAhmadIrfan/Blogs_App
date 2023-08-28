import "./Update.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Update = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(props.idd);
  const handlesignup = async (e) => {
    const userId = props.idd;
    console.log(userId)
    e.preventDefault();
    const data = {
      name: name,
      username: email,
      password: password,
    };
    try {
      await axios.put(`http://localhost:8000/${userId}`, data, {
        withCredentials: true,
      });
      navigate("/home");
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
              Enter New Name
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
              Enter New Email
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
              Enter New Password
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
            <button className="loginbtn" type="submit">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
