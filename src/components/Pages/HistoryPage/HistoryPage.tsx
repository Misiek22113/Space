import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "./HistoryPage.scss";
import SPACECRAFT from "../../../assets/HistoryPage/spacecraft_fire.svg";
import APOLLO_SVG from "../../../assets/HistoryPage/apollo.svg";
import HALF_MOON from "../../../assets/HistoryPage/half_moon.png";
import {
  SPUTNIK,
  SPUTNIK_2,
  EXPLORER,
  VOSTOK_1,
  REACH_THE_MOON,
  FIRST_SPACEWALK,
  GEMMINI,
  APOLLO,
} from "./HistoryData";
import { useRef } from "react";

const HistoryPage = () => {
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <>
      <div className="history-wrapper">
        <div className="history-page-background"></div>
        <div className="parallax-content">
          <Parallax
            pages={14.5}
            ref={parallax}
            style={{ scrollbarColor: "red" }}
          >
            <ParallaxLayer
              offset={0}
              speed={1}
              style={{ justifyContent: "center" }}
              onClick={() => scroll(1)}
            >
              <h1 className="take-off-text">TAKE OFF</h1>
            </ParallaxLayer>
            <ParallaxLayer
              sticky={{ start: 0.9, end: 12.4 }}
              style={{ justifyContent: "flex-start", width: "30%" }}
            >
              <div className="spacecraft-container">
                <img src={SPACECRAFT} className="spacecraft-image"></img>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={0.5}
              style={{ justifyContent: "flex-end" }}
              onClick={() => scroll(2.6)}
            >
              <h1 className="date-text">{SPUTNIK.date}</h1>
              <h2 className="mission-text">MISSION:</h2>
              <h2 className="mission-text">{SPUTNIK.mission}</h2>
              <h3 className="mission-content">{SPUTNIK.content}</h3>
            </ParallaxLayer>
            {/*  */}
            <ParallaxLayer
              offset={2.8}
              speed={0.5}
              style={{ justifyContent: "flex-end" }}
              onClick={() => scroll(4.1)}
            >
              <h1 className="date-text">{SPUTNIK_2.date}</h1>
              <h2 className="mission-text">MISSION:</h2>
              <h2 className="mission-text">{SPUTNIK_2.mission}</h2>
              <h3 className="mission-content">{SPUTNIK_2.content}</h3>
            </ParallaxLayer>
            {/*  */}
            <ParallaxLayer
              offset={4.1}
              speed={0.5}
              style={{ justifyContent: "flex-end" }}
              onClick={() => scroll(5.7)}
            >
              <h1 className="date-text">{EXPLORER.date}</h1>
              <h2 className="mission-text">MISSION:</h2>
              <h2 className="mission-text">{EXPLORER.mission}</h2>
              <h3 className="mission-content">{EXPLORER.content}</h3>
            </ParallaxLayer>
            {/*  */}
            <ParallaxLayer
              offset={5.9}
              speed={0.5}
              style={{ justifyContent: "flex-end" }}
              onClick={() => scroll(7.18)}
            >
              <h1 className="date-text">{VOSTOK_1.date}</h1>
              <h2 className="mission-text">MISSION:</h2>
              <h2 className="mission-text">{VOSTOK_1.mission}</h2>
              <h3 className="mission-content">{VOSTOK_1.content}</h3>
            </ParallaxLayer>
            {/*  */}
            <ParallaxLayer
              offset={7.18}
              speed={0.5}
              style={{ justifyContent: "flex-end" }}
              onClick={() => scroll(9.1)}
            >
              <h1 className="date-text">{REACH_THE_MOON.date}</h1>
              <h2 className="mission-text">MISSION:</h2>
              <h2 className="mission-text">{REACH_THE_MOON.mission}</h2>
              <h3 className="mission-content">{REACH_THE_MOON.content}</h3>
            </ParallaxLayer>
            {/*  */}
            <ParallaxLayer
              offset={9}
              speed={0.5}
              style={{ justifyContent: "flex-end" }}
              onClick={() => scroll(10.6)}
            >
              <h1 className="date-text">{FIRST_SPACEWALK.date}</h1>
              <h2 className="mission-text">MISSION:</h2>
              <h2 className="mission-text">{FIRST_SPACEWALK.mission}</h2>
              <h3 className="mission-content">{FIRST_SPACEWALK.content}</h3>
            </ParallaxLayer>
            {/*  */}
            <ParallaxLayer
              offset={10.8}
              speed={0.5}
              style={{ justifyContent: "flex-end" }}
              onClick={() => scroll(12.1)}
            >
              <h1 className="date-text">{GEMMINI.date}</h1>
              <h2 className="mission-text">MISSION:</h2>
              <h2 className="mission-text">{GEMMINI.mission}</h2>
              <h3 className="mission-content">{GEMMINI.content}</h3>
            </ParallaxLayer>
            <ParallaxLayer
              offset={12.1}
              speed={0.5}
              style={{ justifyContent: "flex-end" }}
              onClick={() => scroll(13.9)}
            >
              <h1 className="date-text">{APOLLO.date}</h1>
              <h2 className="mission-text">MISSION:</h2>
              <h2 className="mission-text">{APOLLO.mission}</h2>
              <h3 className="mission-content">{APOLLO.content}</h3>
            </ParallaxLayer>
            <ParallaxLayer
              offset={13.9}
              speed={0.5}
              style={{ justifyContent: "center" }}
            >
              <div className="apollo-container">
                <img src={HALF_MOON} className="half-moon-image"></img>
                <img src={APOLLO_SVG} className="apollo-image"></img>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
