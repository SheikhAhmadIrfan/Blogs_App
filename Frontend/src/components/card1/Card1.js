import React from "react";
import "./Card1.css";
import { Fetchblogsactions } from "../../redux/slices/Fetchblogslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card1 = (props) => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const handledetail = () => {
        dispatch(Fetchblogsactions.addValue(props.id));
        navigate("/detail");
      };
  return (
    <div className="cardcontainer">
      <div className="cardimg">
        <img src={`http://localhost:8000/images/` + props.image} alt="" />
      </div>
      <div className="cardone">
        <h3>Title</h3>
        <p>{props.title}</p>
      </div>
      <div className="cardone">
        <h3>Author</h3>
        <p>{props.author}</p>
      </div>
      <div className="cardbutton">
        <button onClick={handledetail}>Read More</button>
      </div>
    </div>
  );
};

export default Card1;
