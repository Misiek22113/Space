import "./Navbar.scss";
import COMPAS from "./compas_filled.svg";
import BURGER from "./burger.svg";
import CLOSE from "./close.svg";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [burgerVisible, setburgerVisible] = useState(true);

  let screen = window.innerWidth;
  console.log(screen);

  const handleBurgerClick = () => {
    setburgerVisible(!burgerVisible);
  };

  return (
    <nav className="nav-container">
      <Link to="/" id="compass-icon-align">
        <img src={COMPAS} id="compass-icon"></img>
      </Link>
      <button
        onClick={handleBurgerClick}
        className={
          burgerVisible == true ? "toggle-button-burger" : "toggle-button-close"
        }
      ></button>
      <ul className="primary-navigation" data-is-active={`${burgerVisible}`}>
        <li className="list-element">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-text-underlined" : "nav-text"
            }
          >
            HOME
          </NavLink>
        </li>
        <li className="list-element">
          <NavLink
            to="/SolarSystem"
            className={({ isActive }) =>
              isActive ? "nav-text-underlined" : "nav-text"
            }
          >
            SOLAR SYSTEM
          </NavLink>
        </li>
        <li className="list-element">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-text-underlined" : "nav-text"
            }
          >
            HUMANS IN SPACE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
