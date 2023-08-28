import "./Detail.css";
import blog from "../../assets/blog.jpg";
import clap from "../../assets/clap.jpg";
import Header from "../../components/header/Header";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = ({ token,email }) => {
  const [comment, setcomment] = useState("");
  const [desc, setdesc] = useState("");
  const [arr, setarr] = useState([]);
  const id = useSelector((state) => state.Fetchblogslice.value);
  const handlecomment = async () => {
    const data = {
      text: comment,
    };
    try {
      const response = await axios.post(
        `http://localhost:8000/postComment/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const authorName = "Author's Name";
  const authorEmail = "author@example.com";

  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${authorEmail}?subject=Contacting ${authorName}`;
  };
  useEffect(() => {
    async function fetchMycomments() {
      try {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        const tokenData = JSON.stringify(token);
        document.cookie = `access_token=${tokenData}; expires=${expirationDate.toUTCString()}; path=/`;
        const response = await axios.get(`http://localhost:8000/post/${id}`);
        console.log(response.data)
        setdesc(response.data.description)
        setarr(response.data.comments);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMycomments();
  }, [id, token,arr]);
  return (
    <div className="detailcontainer">
      <Header name={email} />
      <h1>My Blog</h1>
      <div className="detailimage">
        <img src={blog} alt="" className="detailimagee" />
        <div className="detailtextarea">
          <textarea
            rows="4"
            cols="50"
            placeholder="Add your comment"
            onChange={(e) => setcomment(e.target.value)}
          ></textarea>
          <div className="detailcontent">
            <button onClick={handlecomment}>Add Comment</button>
            <div className="detailcontent1">
              <img src={clap} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
      <div className="detailtext">
        <p>
          {desc}
        </p>
      </div>
      <div>
        <h1>Comments</h1>
        <div className="detailcomment">
          {arr?.map((item) => {
            return (
              <div className="detailcommentt">
                <h3>{email} : </h3>
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="detailauthor">
        <h2>{authorName}</h2>
        <p>{authorEmail}</p>
        <button onClick={handleEmailButtonClick}>Author Profile</button>
      </div>
    </div>
  );
};
export default Detail;
