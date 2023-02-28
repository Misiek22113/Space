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

const SolarSystem = () => {
  return (
    <>
      <div className="solar-system-background"></div>
      <div className="planet-section">
        <div className="sun-card">
          <Card
            planet={SUN.planet}
            overview={SUN.overview}
            distance={SUN.distance}
            moons={SUN.moons}
            years={SUN.years}
            planetImgPath={SUN.planetImgPath}
            onRight={true}
          ></Card>
        </div>
        <Card
          planet={"MERUCRY"}
          overview={MERCURY.overview}
          distance={MERCURY.distance}
          moons={MERCURY.moons}
          years={MERCURY.years}
          planetImgPath={"Mercury.png"}
          onRight={false}
        ></Card>
        <Card
          planet={VENUS.planet}
          overview={VENUS.overview}
          distance={VENUS.distance}
          moons={VENUS.moons}
          years={VENUS.years}
          planetImgPath={"venus.png"}
          onRight={true}
        ></Card>
        <Card
          planet={"EARTH"}
          overview={EARTH.overview}
          distance={EARTH.distance}
          moons={EARTH.moons}
          years={EARTH.years}
          planetImgPath={"Earth_small.png"}
          onRight={false}
        ></Card>
        <Card
          planet={"MARS"}
          overview={MARS.overview}
          distance={MARS.distance}
          moons={MARS.moons}
          years={MARS.years}
          planetImgPath={"Mars_small.png"}
          onRight={true}
        ></Card>
        <Card
          planet={"JUPITER"}
          overview={JUPITER.overview}
          distance={JUPITER.distance}
          moons={JUPITER.moons}
          years={JUPITER.years}
          planetImgPath={"Jupiter_small.png"}
          onRight={false}
        ></Card>
        <Card
          planet={"SATURN"}
          overview={SATURN.overview}
          distance={SATURN.distance}
          moons={SATURN.moons}
          years={SATURN.years}
          planetImgPath={"Saturn_without_ring.png"}
          onRight={true}
        ></Card>
        <Card
          planet={"URANUS"}
          overview={URANUS.overview}
          distance={URANUS.distance}
          moons={URANUS.moons}
          years={URANUS.years}
          planetImgPath={"Uran_small.png"}
          onRight={false}
        ></Card>
        <Card
          planet={"NEPTUNE"}
          overview={NEPTUNE.overview}
          distance={NEPTUNE.distance}
          moons={NEPTUNE.moons}
          years={NEPTUNE.years}
          planetImgPath={"Neptun_small.png"}
          onRight={true}
        ></Card>
      </div>
    </>
  );
};

export default SolarSystem;
