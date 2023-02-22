import "./Card.scss";
import CardPlanetInfo from "./CardPlanetInfro";

const Card = ({
  planet,
  overview,
  distance,
  weigh,
  age,
  planetImgPath,
}: CardPlanetInfo) => {
  return (
    <div className="card-container">
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
            <h3>{distance}</h3>
            <h3 className="measure-text">million kolometers</h3>
          </div>
          <div className="single-planet-figure">
            <h3>{weigh}</h3>
            <h3 className="measure-text">times Earth</h3>
          </div>
          <div className="single-planet-figure">
            <h3>{age}</h3>
            <h3 className="measure-text">billion years</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
