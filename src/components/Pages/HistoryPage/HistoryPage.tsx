import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./HistoryPage.scss";
import SPACECRAFT from "../../../assets/HistoryPage/spacecraft.svg";
import APOLLO_SVG from "../../../assets/HistoryPage/apollo.svg";
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

const HistoryPage = () => {
  return (
    <>
      <div className="history-wrapper">
        <div className="history-page-background"></div>
        <div className="parallax-content">
          <Parallax pages={14}>
            <ParallaxLayer
              offset={0}
              speed={1}
              style={{ justifyContent: "center" }}
            >
              <h1 className="take-off-text">TAKE OFF</h1>
            </ParallaxLayer>
            <ParallaxLayer
              sticky={{ start: 0.9, end: 13 }}
              style={{ justifyContent: "flex-start" }}
            >
              <img src={SPACECRAFT} className="spacecraft-image"></img>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={0.5}
              style={{ justifyContent: "flex-end" }}
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
            >
              <h1 className="date-text">{APOLLO.date}</h1>
              <h2 className="mission-text">MISSION:</h2>
              <h2 className="mission-text">{APOLLO.mission}</h2>
              <h3 className="mission-content">{APOLLO.content}</h3>
            </ParallaxLayer>
            <ParallaxLayer
              offset={13}
              speed={0.5}
              style={{ justifyContent: "center" }}
            >
              <img src={APOLLO_SVG} className="spacecraft-image"></img>
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
