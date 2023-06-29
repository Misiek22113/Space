"use client";
import "./Navbar.scss";
import COMPASS from "./compas_filled.svg";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Navbar = () => {
  const [burgerVisible, setBurgerVisible] = useState(true);
  const [activePath, setActivePath] = useState("/");

  const handleBurgerClick = () => {
    setBurgerVisible(!burgerVisible);
  };

  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathName == "/") {
      setActivePath("/");
    } else if (pathName == "/solar-system") {
      setActivePath("/solar-system");
    } else if (pathName == "/history") {
      setActivePath("/history");
    }
  }, [pathName, searchParams]);

  return (
    <nav className="nav-container">
      <Link href="/" id="compass-icon-align">
        <Image alt="compass" src={COMPASS} id="compass-icon"></Image>
      </Link>
      <button
        onClick={handleBurgerClick}
        className={
          burgerVisible == true ? "toggle-button-burger" : "toggle-button-close"
        }
        id="burger-button"
      ></button>
      <ul className="primary-navigation" data-is-active={`${burgerVisible}`}>
        <li className="list-element">
          <Link
            href="/"
            className={activePath == "/" ? "nav-text-underlined" : "nav-text"}
          >
            HOME
          </Link>
        </li>
        <li className="list-element">
          <Link
            href="/solar-system"
            className={
              activePath == "/solar-system" ? "nav-text-underlined" : "nav-text"
            }
          >
            SOLAR SYSTEM
          </Link>
        </li>
        <li className="list-element">
          <Link
            href="/history"
            className={
              activePath == "/history" ? "nav-text-underlined" : "nav-text"
            }
          >
            HUMANS IN SPACE
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
