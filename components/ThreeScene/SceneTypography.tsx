import "./ThreeScene.scss";
import COMPASS from "../../public/three/compass.svg";
import SPACE_TRAVEL from "../../public/three/space-travel.png";
import Image from "next/image";

const SceneTypography = () => {
  return (
    <>
      <div className="background">
        <div className="site-content">
          <div className="compass-container">
            <Image
              alt="compass"
              src={COMPASS}
              id="compass-icon"
              width={55}
              height={55}
            />
          </div>
          <div className="space-expedition-container">
            <div className="space-journey-icon-container">
              <Image
                alt="space-travel"
                src={SPACE_TRAVEL}
                id="space-journey-icon"
                width={65}
                height={65}
              />
            </div>
            <div className="journey-data">
              {/* <p>EXPEDITION DATA</p> */}
              <p className="data-paragraph">{"> "}COMMUNICATION: ESTABLISHED</p>
              <p className="data-paragraph">
                {"> "}COORDINATES: 1.55, -0.08, -5.94 kpc
              </p>
              <p className="data-paragraph">{"> "}DESTINATION: UNKNOWN</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SceneTypography;
