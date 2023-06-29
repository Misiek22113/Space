import "./Card.scss";
import CardPlanetInfo from "./CardPlanetInfro";
import PLANET from "../../../public/planet.svg";
import Image from "next/image";

const Card = ({
  planet,
  overview,
  distance,
  moons,
  years,
  planetImgPath,
  onRight,
  showInfo,
  lengthDays,
}: CardPlanetInfo) => {
  const displayPlanetFigures = () => {
    return (
      <div className="planet-figures">
        <div className="single-planet-figure">
          <div className="measure">
            <h3>{years}</h3>
            <h3 className="measure-text">
              Earth {lengthDays == true ? "Days" : "Years"}
            </h3>
          </div>
          <h3 className="description-text">Length Of Year</h3>
        </div>
        <div className="single-planet-figure">
          <div className="measure">
            <h3>{distance}</h3>
            <h3 className="measure-text">AU</h3>
          </div>
          <h3 className="description-text">Distance From Sun</h3>
        </div>
        <div className="single-planet-figure">
          <div className="measure">
            <h3>{moons}</h3>
            <Image alt="planet icon" src={PLANET} id="planet-icon"></Image>
          </div>
          <h3 className="description-text">Moons</h3>
        </div>
      </div>
    );
  };

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
        <Image
          alt="planet img"
          className="planet-img"
          width={500}
          height={500}
          src={`/solar-system-page/planets/${planetImgPath}`}
        ></Image>
      </div>
      <div className="information-container">
        <div className="planet-overview">
          <p>{overview}</p>
        </div>
        {showInfo == true ? (
          displayPlanetFigures()
        ) : (
          <div id="space-between-text" />
        )}
      </div>
    </div>
  );
};

export default Card;
