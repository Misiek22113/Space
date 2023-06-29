import { ParallaxLayer } from "@react-spring/parallax";
import { MissionInformation } from "../../utils/Intefaces";

const MissionCard = ({
  offset,
  speed,
  scroll,
  scrollValue,
  missionInfo,
}: MissionInformation) => {
  const MI = missionInfo;

  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      style={{ justifyContent: "flex-end", cursor: "pointer" }}
      onClick={() => scroll(scrollValue)}
    >
      <h1 className="date-text">{MI.date}</h1>
      <h2 className="mission-text">MISSION:</h2>
      <h2 className="mission-text">{MI.mission}</h2>
      <h3 className="mission-content">{MI.content}</h3>
    </ParallaxLayer>
  );
};

export default MissionCard;
