import HomeInfo from "../../HomeInfo/HomeInfo";
import "./HomePage.scss";
import Button from "../../../styles/button.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Background from "../../../../public/backgrounds/Home_Page_1920_dark.jpg";

const HomePage = () => {
  return (
    <>
      <img src={Background} className="background"></img>
      <div className="home-page-content">
        <div className="home-info-section">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "circOut", duration: 0.6 }}
          >
            <HomeInfo />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6, delay: 0.3 }}
          id="button-container"
        >
          <Link to="/SolarSystem">
            <motion.button
              className={`${Button.circle}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              EXPLORE
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
