import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./HistoryPage.scss";
import SPACECRAFT from "../../../assets/HistoryPage/spacecraft.svg";
import SPACECRAFT_START from "../../../assets/HistoryPage/rocket_start.svg";

const HistoryPage = () => {
  return (
    <>
      <div className="history-wrapper">
        <div className="history-page-background"></div>
        <div className="parallax-content">
          <Parallax pages={10}>
            <ParallaxLayer
              offset={0}
              speed={1}
              style={{ justifyContent: "center" }}
            >
              <h1 className="take-off-text">TAKE-OFF</h1>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={1.5}
              style={{ justifyContent: "center" }}
            >
              <h1 className="take-off-counter-text">3</h1>
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={1.5}
              style={{ justifyContent: "center" }}
            >
              <h1 className="take-off-counter-text">2</h1>
            </ParallaxLayer>
            <ParallaxLayer
              offset={3}
              speed={1.5}
              style={{ justifyContent: "center" }}
            >
              <h1 className="take-off-counter-text">1</h1>
            </ParallaxLayer>
            <ParallaxLayer
              offset={4}
              speed={0.5}
              style={{ justifyContent: "center" }}
              className="start-container"
            >
              <img src={SPACECRAFT_START} className="start-image"></img>
            </ParallaxLayer>
            <ParallaxLayer
              sticky={{ start: 5, end: 10 }}
              style={{ justifyContent: "flex-start" }}
            >
              <img src={SPACECRAFT} className="spacecraft-image"></img>
            </ParallaxLayer>
            <ParallaxLayer
              offset={6}
              speed={0.5}
              style={{ justifyContent: "flex-end" }}
            >
              <h1
                className="date-text"
                // style={{ display: "block", width: "10%", marginLeft: "70%" }}
              >
                1961
              </h1>
              <h2 className="mission-text">MISSION:</h2>
              <h2 className="mission-text">WOSTOK I</h2>
            </ParallaxLayer>
            <ParallaxLayer
              offset={7}
              speed={0.5}
              style={{ justifyContent: "flex-end" }}
            >
              <h3 className="mission-content">
                Jurij Gagarin was the first person who have been into space
              </h3>
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
