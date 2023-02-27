import Card from "../../Card/Card";
import SUN from "./PlanetsInfo";
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
            weigh={SUN.weigh}
            age={SUN.weigh}
            planetImgPath={SUN.planetImgPath}
            onRight={true}
          ></Card>
        </div>
        <Card
          planet={"MERUCRY"}
          overview={SUN.overview}
          distance={SUN.distance}
          weigh={SUN.weigh}
          age={SUN.weigh}
          planetImgPath={"Mercury.png"}
          onRight={false}
        ></Card>
        <Card
          planet={"VENUS"}
          overview={SUN.overview}
          distance={SUN.distance}
          weigh={SUN.weigh}
          age={SUN.weigh}
          planetImgPath={"venus.png"}
          onRight={true}
        ></Card>
        <Card
          planet={"EARTH"}
          overview={SUN.overview}
          distance={SUN.distance}
          weigh={SUN.weigh}
          age={SUN.weigh}
          planetImgPath={"Earth_small.png"}
          onRight={false}
        ></Card>
        <Card
          planet={"MARS"}
          overview={SUN.overview}
          distance={SUN.distance}
          weigh={SUN.weigh}
          age={SUN.weigh}
          planetImgPath={"Mars_small.png"}
          onRight={true}
        ></Card>
        <Card
          planet={"JUPITER"}
          overview={SUN.overview}
          distance={SUN.distance}
          weigh={SUN.weigh}
          age={SUN.weigh}
          planetImgPath={"Jupiter_small.png"}
          onRight={false}
        ></Card>
        <Card
          planet={"SATURN"}
          overview={SUN.overview}
          distance={SUN.distance}
          weigh={SUN.weigh}
          age={SUN.weigh}
          planetImgPath={"Saturn_without_ring.png"}
          onRight={true}
        ></Card>
        <Card
          planet={"URANUS"}
          overview={SUN.overview}
          distance={SUN.distance}
          weigh={SUN.weigh}
          age={SUN.weigh}
          planetImgPath={"Uran_small.png"}
          onRight={false}
        ></Card>
        <Card
          planet={"NEPTUN"}
          overview={SUN.overview}
          distance={SUN.distance}
          weigh={SUN.weigh}
          age={SUN.weigh}
          planetImgPath={"Neptun_small.png"}
          onRight={true}
        ></Card>
      </div>
    </>
  );
};

export default SolarSystem;
