import Card from "../../Card/Card";
import "./MoonPage.scss";
import MOON from "./MoonInfo";

const MoonPage = () => {
  return (
    <div className="background-moon">
      <div className="card-section">
        <Card
          planet={MOON.planet}
          overview={MOON.overview}
          distance={MOON.distance}
          moons={MOON.weight}
          years={MOON.age}
          planetImgPath={MOON.planetImgPath}
          onRight={true}
        />
      </div>

      {/* <h1>MoonPage</h1> */}
    </div>
  );
};

export default MoonPage;