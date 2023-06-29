import SUN_IMG from "../../public/solar-system-page/planets/Sun.png";
import VENUS_IMG from "../../public/solar-system-page/planets/Venus.png";
import MERCURY_IMG from "../../public/solar-system-page/planets/Mercury.png";
import EARTH_IMG from "../../public/solar-system-page/planets/Earth.png";
import MARS_IMG from "../../public/solar-system-page/planets/Mars.png";
import JUPITER_IMG from "../../public/solar-system-page/planets/Jupiter.png";
import SATURN_IMG from "../../public/solar-system-page/planets/Saturn.png";
import URANUS_IMG from "../../public/solar-system-page/planets/Uranus.png";
import NEPTUNE_IMG from "../../public/solar-system-page/planets/Neptune.png";

const SUN = {
  planet: "THE SUN",
  overview:
    "The Sun is the only one star in our Solar System. It is a yellow dwarf star, a hot ball of glowing gases. Is's gravity holds everythong from the biggest planets to tiny debris in its orbit.",
  distance: 150,
  moons: 330000,
  years: 4.5,
  planetImg: SUN_IMG,
  showInfo: false,
};

const VENUS = {
  planet: "VENUS",
  overview:
    "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
  distance: 0.7,
  moons: 0,
  years: 225,
  planetImg: VENUS_IMG,
  showInfo: true,
};

const MERCURY = {
  planet: "MERCURY",
  overview:
    "Mercury is the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
  distance: 0.4,
  moons: 0,
  years: 88,
  planetImg: MERCURY_IMG,
  showInfo: true,
};

const EARTH = {
  planet: "EARTH",
  overview:
    "Earth is our home planet. It is the only place we know of so far that's inhabited by living things. It's also the only planet in our solar system with liquid water on the surface. (click on the Moon)",
  distance: 1,
  moons: 1,
  years: 1,
  planetImg: EARTH_IMG,
  showInfo: true,
};

const MARS = {
  planet: "MARS",
  overview:
    "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.",
  distance: 1.5,
  moons: 2,
  years: 1.88,
  planetImg: MARS_IMG,
  showInfo: true,
};

const JUPITER = {
  planet: "JUPITER",
  overview:
    "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.",
  distance: 5.2,
  moons: 79,
  years: 11.86,
  planetImg: JUPITER_IMG,
  showInfo: true,
};

const SATURN = {
  planet: "SATURN",
  overview:
    "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
  distance: 9.5,
  moons: 62,
  years: 29.45,
  planetImg: SATURN_IMG,
  showInfo: true,
};

const URANUS = {
  planet: "URANUS",
  overview:
    "Uranus is seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
  distance: 19.8,
  moons: 27,
  years: 84,
  planetImg: URANUS_IMG,
  showInfo: true,
};

const NEPTUNE = {
  planet: "NEPTUNE",
  overview:
    "It is the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.",
  distance: 30.1,
  moons: 14,
  years: 164.81,
  planetImg: NEPTUNE_IMG,
  showInfo: true,
};

export { SUN, VENUS, MERCURY, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE };
