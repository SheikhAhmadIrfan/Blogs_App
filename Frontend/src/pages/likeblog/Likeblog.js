import "./Likeblog.css";
import Header from "../../components/header/Header";
import liked1 from '../../assets/liked1.jpg'
import liked2 from '../../assets/liked2.jpg'
import liked3 from '../../assets/liked3.jpg'
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Likedblog = (props) => {
  const [myBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    async function fetchMylikedBlogs() {
      try {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        const tokenData = JSON.stringify(props.token);
        document.cookie = `access_token=${tokenData}; expires=${expirationDate.toUTCString()}; path=/`;
        const response = await axios.get(
          `http://localhost:8000/user/${props.idd}`
        );
        setMyBlogs(response.data.likedblogs);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMylikedBlogs();
  }, [props.idd, props.token]);

  return (
    <div className="homecontainer">
      <div className="homecontainer">
        <Header name={props.name} />
        <div className="homemain">
          <img src={liked1} alt="" />
          <img src={liked2} alt="" />
          <img src={liked3} alt="" />
        </div>
        <h1>Liked BLOGS</h1>
        <div className="homecard">
          {myBlogs?.map((item) => {
            return (
              <Card
                key={item._id}
                val={props.idd}
                id={item._id}
                title={item.title}
                author={item.author}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Likedblog;
