import "./Card.scss";
import CardPlanetInfo from "./CardPlanetInfro";
import PLANET from "../../../public/planet.svg";

const Card = ({
  planet,
  overview,
  distance,
  moons,
  years,
  planetImgPath,
  onRight,
}: CardPlanetInfo) => {
  return (
    <div
      className={
        onRight === true ? "card-container-right" : "card-container-left"
      }
    >
      <div className="planet-name">
        <h1>{planet}</h1>
      </div>
      <div className="planet-img-container">
        <img src={`/planets/${planetImgPath}`}></img>
      </div>
      <div className="information-container">
        <div className="planet-overview">
          <p>{overview}</p>
        </div>
        <div className="planet-figures">
          <div className="single-planet-figure">
            <div className="measure">
              <h3>{years}</h3>
              <h3 className="measure-text">Earth Years</h3>
            </div>
            <h3 className="description-text">Length Of Year</h3>
          </div>
          <div className="single-planet-figure">
            <div className="measure">
              <h3>{distance}</h3>
              <h3 className="measure-text">AU</h3>
            </div>
            <h3 className="description-text">Distance from sun</h3>
          </div>
          <div className="single-planet-figure">
            <div className="measure">
              <h3>{moons}</h3>
              <img src={PLANET} id="planet-icon"></img>
            </div>
            <h3 className="description-text">Moons</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
