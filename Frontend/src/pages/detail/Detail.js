import "./Detail.css";
import blog from "../../assets/blog.jpg";
import clap from "../../assets/clap.jpg";
import Header from "../../components/header/Header";

const Detail = () => {
  const authorName = "Author's Name";
  const authorEmail = "author@example.com";

  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${authorEmail}?subject=Contacting ${authorName}`;
  };
  return (
    <div className="detailcontainer">
      <Header />
      <h1>My Blog</h1>
      <div className="detailimage">
        <img src={blog} alt="" className="detailimagee" />
        <div className="detailtextarea">
          <textarea
            rows="4"
            cols="50"
            placeholder="Add your comment"
          ></textarea>
          <div className="detailcontent">
            <button>Add Comment</button>
            <div className="detailcontent1">
              <img src={clap} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
      <div className="detailtext">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          quo dignissimos nostrum quae animi officiis, laborum culpa eligendi
          architecto odit molestiae blanditiis tempora quos numquam impedit
          vitae eveniet recusandae ipsam!
        </p>
      </div>
      <div>
        <h1>Comments</h1>
        <div className="detailcomment">
          <div className="detailcommentt">
            <h3>Ahmad : </h3>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
              doloribus praesentium pariatur veritatis cupiditate sapiente magni
              explicabo totam alias? Obcaecati!
            </span>
          </div>
          <div className="detailcommentt">
            <h3>Ahmad : </h3>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
              doloribus praesentium pariatur veritatis cupiditate sapiente magni
              explicabo totam alias? Obcaecati!
            </span>
          </div>
          <div className="detailcommentt">
            <h3>Ahmad : </h3>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
              doloribus praesentium pariatur veritatis cupiditate sapiente magni
              explicabo totam alias? Obcaecati!
            </span>
          </div>
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
