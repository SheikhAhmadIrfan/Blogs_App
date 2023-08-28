import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { Fetchblogsactions } from "../../redux/slices/Fetchblogslice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Card = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function fetchImageData() {
      try {
        const response = await axios.get(
          `http://localhost:8000/post/${props.id}`
        );
        setImageData(response.data.image);
        dispatch(Fetchblogsactions.addimage(response.data.image))
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchImageData();
  }, [props.id,dispatch]);

  const handledetail = () => {
    dispatch(Fetchblogsactions.addValue(props.id));
    navigate("/detail");
  };

  const handlelike = async () => {
    setIsLiked(!isLiked);
    if (isLiked === true) {
      const data = {
        title: props.title,
        author: props.author,
      };
      try {
        await axios.post(`http://localhost:8000/likedpost/${props.val}`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="cardcontainer">
      <div className="cardimg">
        {imageData === null ? (
          <p style={{textAlign:"center" , color:'purple' , fontSize:'20px'}}>Liked Blog</p>
        ) : (
          <img
            src={`http://localhost:8000/images/`+imageData}
            alt=""
          />
        )}
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
        <button
          className={`cardbtn ${isLiked ? "liked" : ""}`}
          onClick={handlelike}
        >
          {isLiked ? "Liked" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default Card;
