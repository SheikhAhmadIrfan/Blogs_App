import "./Card.css";
import blog from '../../assets/blog.jpg'
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const handledetail = () => {
    navigate('/detail');
  };
  return (
    <div className="cardcontainer">
      <div className="cardimg">
        <img src={blog} alt="" />
      </div>
      <div className="cardone">
        <h3>Title</h3>
        <p>Top News</p>
      </div>
      <div className="cardone">
        <h3>Author</h3>
        <p>Ahmad</p>
      </div>
      <div className="cardbutton">
        <button onClick={handledetail}>Read More</button>
      </div>
    </div>
  );
};

export default Card;
