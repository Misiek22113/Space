import Card from "../../Card/Card";
import "./MoonPage.scss";
import MOON from "./MoonInfo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MoonPage = () => {
  return (
    <div className="background-moon">
      <motion.div
        className="card-section"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "circOut", duration: 0.6 }}
      >
        <Card
          planet={MOON.planet}
          overview={MOON.overview}
          distance={MOON.distance}
          moons={MOON.weight}
          years={MOON.age}
          planetImgPath={MOON.planetImgPath}
          onRight={true}
        />
      </motion.div>

      {/* <h1>MoonPage</h1> */}
    </div>
  );
};

export default MoonPage;
