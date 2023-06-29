import { StaticImageData } from "next/image";

export default interface CardPlanetInfo {
  planet: string;
  overview: string;
  distance: number;
  moons: number;
  years: number;
  planetImg: StaticImageData;
  onRight: boolean;
  showInfo: boolean;
  lengthDays: boolean;
}
