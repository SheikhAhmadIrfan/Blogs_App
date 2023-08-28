import React, { useEffect, useState } from "react";
import axios from "axios";
import my1 from "../../assets/my1.jpg";
import my2 from "../../assets/my2.jpg";
import my3 from "../../assets/my3.jpg";
import Header from "../../components/header/Header";
import Blog from "../../components/blog/Blog";

const Myblog = ({ idd, token, name }) => {
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    async function fetchMyBlogs() {
      try {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        const tokenData = JSON.stringify(token);
        document.cookie = `access_token=${tokenData}; expires=${expirationDate.toUTCString()}; path=/`;
        const response = await axios.get(`http://localhost:8000/user/${idd}`);
        setMyBlogs(response.data.blogs);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMyBlogs();
  }, [idd, token]);

  return (
    <div className="homecontainer">
      <div className="homecontainer">
        <Header name={name} />
        <div className="homemain">
          <img src={my1} alt="" />
          <img src={my2} alt="" />
          <img src={my3} alt="" />
        </div>
        <h1>MY BLOGS</h1>
        <div
          className="homecard"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          {myBlogs?.map((item) => {
            return (
              <Blog
                id={idd}
                key={item._id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Myblog;
