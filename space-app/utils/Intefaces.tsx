import { StaticImageData } from "next/image";

export interface CardPlanetInfo {
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

export interface MissionInformation {
  offset: number;
  speed: number;
  scroll: (to: number) => void;
  scrollValue: number;
  missionInfo: {
    date: number | string;
    mission: string;
    content: string;
  };
}
