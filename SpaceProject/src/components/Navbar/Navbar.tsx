import "./Navbar.scss";
import COMPAS from "./compas_filled.svg";
import BURGER from "./burger.svg";
import CLOSE from "./close.svg";
import { useState } from "react";

const Navbar = () => {
  const [burgerVisible, setburgerVisible] = useState(true);

  let screen = window.innerWidth;
  console.log(screen);

  const handleBurgerClick = () => {
    setburgerVisible(!burgerVisible);
  };

  return (
    <nav className="nav-container">
      <a id="compass-icon-align">
        <img src={COMPAS} id="compass-icon"></img>
      </a>
      <button
        onClick={handleBurgerClick}
        className={
          burgerVisible == true ? "toggle-button-burger" : "toggle-button-close"
        }
      ></button>
      <ul className="primary-navigation" data-is-active={`${burgerVisible}`}>
        <li className="list-element">
          <a className="nav-text">HOME</a>
        </li>
        <li className="list-element">
          <a className="nav-text">SOLAR SYSTEM</a>
        </li>
        <li className="list-element">
          <a className="nav-text">HUMANS IN SPACE</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
