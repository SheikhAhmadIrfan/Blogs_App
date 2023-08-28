import logo from "../../assets/logo.jpg";
import './Header.css'
import { useNavigate } from "react-router-dom";

const Header = ({name}) => {
  const navigate = useNavigate();
  const handlecreateblog = () => {
    navigate('/createblog');
  };
  const handlelogout = () => {
    navigate('/');
  };
  const handleupdate = () => {
    navigate('/updateprofile');
  };
  return (
    <div className="headercontainer">
      <div className="one">
        <img src={logo} alt="" onClick={()=>navigate('/home')} style={{cursor:"pointer"}} />
      </div>
      <div className="vertical"></div>
      <ul className="ul">
        <li onClick={handleupdate}>Edit Profile</li>
        <li onClick={()=>navigate('/likedblog')}>Liked Blogs</li>
        <li onClick={handlecreateblog}>Create Blog</li>
        <li onClick={()=>navigate('/myblog')}>My Blogs</li>
        <li onClick={handlelogout}>Log Out</li>
        <span className="spa">{name}</span>
      </ul>
    </div>
  );
};

export default Header;
