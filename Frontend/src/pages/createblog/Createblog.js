import "./Createblog.css";
import Header from "../../components/header/Header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createblog = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("username", name);

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    const cookieValue =
      encodeURIComponent(props.token) +
      "; expires=" +
      expirationDate.toUTCString() +
      "; path=/";
    document.cookie = "access_token=" + cookieValue;
    try {
      await axios.post("http://localhost:8000/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      console.log(formData);
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header name={props.name} />
      <div className="create-blog-container">
        <h1>Create a Blog</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            name="description"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
          <input
            type="text"
            name="name"
            placeholder=""
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Create Blog</button>
        </form>
      </div>
    </>
  );
};
export default Createblog;
