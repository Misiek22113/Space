import HomeInfo from "../../HomeInfo/HomeInfo";
import "./HomePage.scss";
import Button from "../../../styles/button.module.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="background">
      <div className="home-info-section">
        <HomeInfo />
      </div>
      <Link to="/SolarSystem">
        <button className={`${Button.circle}`}>EXPLORE</button>
      </Link>
    </div>
  );
};

export default HomePage;
