import "./Home.css";
import Header from "../../components/header/Header";
import background from "../../assets/background.jpg";
import background1 from "../../assets/background1.jpeg";
import background2 from "../../assets/background2.jpg";
import Card from "../../components/card/Card";
const Home = () => {
  return (
    <div className="homecontainer">
      <Header />
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
        />
        <button>Search</button>
      </div>
      <h1>BLOGS</h1>
      <div className="homecard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Home;
