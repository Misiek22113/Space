"use client";
import Card from "@/components/Card/Card";
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
} from "../../utils/PlanetsInfo";
import "./SolarSystem.scss";
import MOON_IMG from "../../public/moon-page/moon.png";
import Image from "next/image";
import PlanetAnimation from "@/components/AnimationWrapper/PlanetAnimation";

const SolarSystem = () => {
  return (
    <>
      {/* <Image
        alt="background"
        src={Stars}
        className="solar-system-background"
        placeholder="blur"
        priority
      ></Image> */}
      <div className="planet-section">
        <PlanetAnimation>
          <Card
            CardPlanetInfo={{ ...SUN, onRight: true, lengthDays: false }}
          ></Card>
        </PlanetAnimation>
        <PlanetAnimation fromLeft={true}>
          <Card
            CardPlanetInfo={{ ...MERCURY, onRight: false, lengthDays: true }}
          ></Card>
        </PlanetAnimation>
        <PlanetAnimation>
          <Card
            CardPlanetInfo={{
              ...VENUS,
              onRight: true,
              lengthDays: false,
            }}
          ></Card>
        </PlanetAnimation>
        <PlanetAnimation fromLeft={true}>
          {/* <div> */}
          {/* <Link>
              <Image alt="moon" src={MOON_IMG} className="moon-img"></Image>
            </Link> */}
          {/* </div> */}
          <Card
            CardPlanetInfo={{ ...EARTH, onRight: false, lengthDays: false }}
          ></Card>
        </PlanetAnimation>
        <PlanetAnimation>
          <Card
            CardPlanetInfo={{ ...MARS, onRight: true, lengthDays: false }}
          ></Card>
        </PlanetAnimation>
        <PlanetAnimation fromLeft={true}>
          <Card
            CardPlanetInfo={{ ...JUPITER, onRight: false, lengthDays: false }}
          ></Card>
        </PlanetAnimation>
        <PlanetAnimation>
          <Card
            CardPlanetInfo={{ ...SATURN, onRight: true, lengthDays: false }}
          ></Card>
        </PlanetAnimation>
        <PlanetAnimation fromLeft={true}>
          <Card
            CardPlanetInfo={{ ...URANUS, onRight: false, lengthDays: false }}
          ></Card>
        </PlanetAnimation>
        <PlanetAnimation>
          <Card
            CardPlanetInfo={{ ...NEPTUNE, onRight: true, lengthDays: false }}
          ></Card>
        </PlanetAnimation>
      </div>
    </>
  );
};

export default SolarSystem;
