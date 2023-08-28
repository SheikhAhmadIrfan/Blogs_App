import "./Home.css";
import Header from "../../components/header/Header";
import background from "../../assets/background.jpg";
import background1 from "../../assets/background1.jpeg";
import background2 from "../../assets/background2.jpg";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = (props) => {
  const [val, setval] = useState("");
  const [blogs, setblogs] = useState([]);
  const [blogs1, setblogs1] = useState([]);
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    async function fetchMyBlogs() {
      try {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        const tokenData = JSON.stringify(props.token);
        document.cookie = `access_token=${tokenData}; expires=${expirationDate.toUTCString()}; path=/`;
        const response = await axios.get("http://localhost:8000/post");
        setblogs1(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMyBlogs();
  }, [props.token]);

  const handlesearch = async () => {
    const data = {
      title: val,
    };
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    const cookieValue =
      encodeURIComponent(props.token) +
      "; expires=" +
      expirationDate.toUTCString() +
      "; path=/";
    document.cookie = "access_token=" + cookieValue;
    try {
      const response = await axios.post(
        "http://localhost:8000/getsearchpost",
        data,
        {
          withCredentials: true,
        }
      );
      setvisible(true);
      setblogs(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="homecontainer">
      <div className="homecontainer">
        <Header name={props.name} />
        <div className="homemain">
          <img src={background} alt="" />
          <img src={background1} alt="" />
          <img src={background2} alt="" />
        </div>
        <div className="homesearch">
          <input
            className=""
            type="text"
            name="search"
            placeholder="Search Here"
            onChange={(e) => setval(e.target.value)}
          />
          <button onClick={handlesearch}>Search</button>
        </div>
        {visible === true && (
          <div>
            <h1>Searched Blogs</h1>
            <div className="homecard">
              {blogs?.map((item) => {
                return (
                  <Card
                    key={item._id}
                    val={props.idd}
                    id={item._id}
                    title={item.title}
                    author={item.username}
                  />
                );
              })}
            </div>
          </div>
        )}
        <h1>BLOGS</h1>
        <div className="homecard">
          {blogs1?.map((item) => {
            return (
              <Card
                key={item._id}
                val={props.idd}
                id={item._id}
                title={item.title}
                author={item.username}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
