import HomeInfo from "../HomeInfo/HomeInfo";
import "./HomePage.scss";
import Button from "../../styles/button.module.scss";

const HomePage = () => {
  return (
    <div className="background">
      <HomeInfo />
      <button className={`${Button.circle}`}>EXPLORE</button>
    </div>
  );
};

export default HomePage;
