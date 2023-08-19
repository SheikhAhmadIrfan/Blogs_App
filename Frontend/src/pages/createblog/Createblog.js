import "./Createblog.css";
import Header from "../../components/header/Header";
const Createblog = () => {
  return (
    <>
      <Header />
      <div className="create-blog-container">
        <h1>Create a Blog</h1>
        <form>
          <input type="text" name="title" placeholder="Enter title" />
          <textarea name="description" placeholder="Enter description" />
          <input type="file" name="image" accept="image/*" />
          <button type="submit">Create Blog</button>
        </form>
      </div>
    </>
  );
};
export default Createblog;
