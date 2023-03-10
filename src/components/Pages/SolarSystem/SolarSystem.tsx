import { Link, ScrollRestoration } from "react-router-dom";
import Card from "../../Card/Card";
import {
  SUN,
  VENUS,
  MERCURY,
  EARTH,
  MARS,
  JUPITER,
  SATURN,
  URANUS,
  NEPTUNE,
} from "./PlanetsInfo";
import "./SolarSystem.scss";
import { motion } from "framer-motion";

const SolarSystem = () => {
  return (
    <>
      <div className="solar-system-background"></div>
      <div className="planet-section">
        <motion.div
          className="sun-card"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card
            planet={SUN.planet}
            overview={SUN.overview}
            distance={SUN.distance}
            moons={SUN.moons}
            years={SUN.years}
            planetImgPath={SUN.planetImgPath}
            onRight={true}
          ></Card>
        </motion.div>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card
            planet={MERCURY.planet}
            overview={MERCURY.overview}
            distance={MERCURY.distance}
            moons={MERCURY.moons}
            years={MERCURY.years}
            planetImgPath={MERCURY.planetImgPath}
            onRight={false}
          ></Card>
        </motion.div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card
            planet={VENUS.planet}
            overview={VENUS.overview}
            distance={VENUS.distance}
            moons={VENUS.moons}
            years={VENUS.years}
            planetImgPath={VENUS.planetImgPath}
            onRight={true}
          ></Card>
        </motion.div>
        <motion.div
          className="earth-section"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <Link to="/moon" preventScrollReset={true}>
              <img
                src="../../../../public/planets/moon.png"
                className="moon-img"
              ></img>
            </Link>
          </div>
          <Card
            planet={EARTH.planet}
            overview={EARTH.overview}
            distance={EARTH.distance}
            moons={EARTH.moons}
            years={EARTH.years}
            planetImgPath={EARTH.planetImgPath}
            onRight={false}
          ></Card>
        </motion.div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card
            planet={MARS.planet}
            overview={MARS.overview}
            distance={MARS.distance}
            moons={MARS.moons}
            years={MARS.years}
            planetImgPath={MARS.planetImgPath}
            onRight={true}
          ></Card>
        </motion.div>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card
            planet={JUPITER.planet}
            overview={JUPITER.overview}
            distance={JUPITER.distance}
            moons={JUPITER.moons}
            years={JUPITER.years}
            planetImgPath={JUPITER.planetImgPath}
            onRight={false}
          ></Card>
        </motion.div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card
            planet={SATURN.planet}
            overview={SATURN.overview}
            distance={SATURN.distance}
            moons={SATURN.moons}
            years={SATURN.years}
            planetImgPath={SATURN.planetImgPath}
            onRight={true}
          ></Card>
        </motion.div>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card
            planet={URANUS.planet}
            overview={URANUS.overview}
            distance={URANUS.distance}
            moons={URANUS.moons}
            years={URANUS.years}
            planetImgPath={URANUS.planetImgPath}
            onRight={false}
          ></Card>
        </motion.div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card
            planet={NEPTUNE.planet}
            overview={NEPTUNE.overview}
            distance={NEPTUNE.distance}
            moons={NEPTUNE.moons}
            years={NEPTUNE.years}
            planetImgPath={NEPTUNE.planetImgPath}
            onRight={true}
          ></Card>
        </motion.div>
      </div>
    </>
  );
};

export default SolarSystem;
