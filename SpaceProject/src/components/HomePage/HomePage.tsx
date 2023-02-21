import HomeInfo from "../HomeInfo/HomeInfo";
import "./HomePage.scss";
import Button from "../../styles/button.module.scss";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  return (
    <div className="background">
      <Navbar />
      <div className="home-info-section">
        <HomeInfo />
      </div>
      <button className={`${Button.circle}`}>EXPLORE</button>
      <h1>SCROLL</h1>
      <h1>SCROLL</h1>
      <h1>SCROLL</h1>
      <h1>SCROLL</h1>
      <h1>SCROLL</h1>
      <h1>SCROLL</h1>
      <h1>SCROLL</h1>
      <h1>SCROLL</h1>
    </div>
  );
};

export default HomePage;
