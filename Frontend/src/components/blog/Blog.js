import "./Blog.css";

const Blog = (props) => {
  return (
    <div className="blogcontainer">
      <div className="blogimg">
        <img src={`http://localhost:8000/images/` + props.image} alt="" />
      </div>
      <div className="two">
        <div className="blogone">
          <h3>Title</h3>
          <p>{props.title}</p>
        </div>
        <div className="blogone">
          <h3>Description</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
