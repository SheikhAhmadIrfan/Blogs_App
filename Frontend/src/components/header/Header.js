import logo from "../../assets/logo.jpg";
import './Header.css'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handlecreateblog = () => {
    navigate('/a');
  };
  const handlelogout = () => {
    navigate('/login');
  };
  return (
    <div className="headercontainer">
      <div className="one">
        <img src={logo} alt="" />
      </div>
      <div className="vertical"></div>
      <ul className="ul">
        <li>Edit Profile</li>
        <li>Liked Blogs</li>
        <li onClick={handlecreateblog}>Create Blog</li>
        <li>My Blogs</li>
        <li onClick={handlelogout}>Log Out</li>
      </ul>
    </div>
  );
};

export default Header;
