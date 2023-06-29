"use client";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "./HistoryPage.scss";
import SPACECRAFT from "../../public/history-page/spacecraft_fire.svg";
import APOLLO_SVG from "../../public/history-page/apollo.svg";
import HALF_MOON from "../../public/history-page/half_moon.png";
import BACKGROUND from "../../public/history-page/galaxy_dark_2.jpg";
import MissionCard from "@/components/MissionCard/MissionCard";
import {
  SPUTNIK,
  SPUTNIK_2,
  EXPLORER,
  VOSTOK_1,
  REACH_THE_MOON,
  FIRST_SPACEWALK,
  GEMINI,
  APOLLO,
} from "../../utils/HistoryData";
import { useRef } from "react";
import Image from "next/image";

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
        <Image
          alt="homepage background"
          src={BACKGROUND}
          className="background"
          fill
          placeholder="blur"
          priority
        />
        <div className="parallax-content">
          <Parallax pages={14.5} ref={parallax}>
            <ParallaxLayer
              offset={0}
              speed={1}
              style={{ justifyContent: "center", cursor: "pointer" }}
              onClick={() => scroll(1)}
            >
              <h1 className="take-off-text">TAKE OFF</h1>
            </ParallaxLayer>
            <ParallaxLayer
              sticky={{ start: 0.9, end: 12.4 }}
              style={{ justifyContent: "flex-start", width: "30%" }}
            >
              <div className="spacecraft-container">
                <Image
                  alt="spacecraft"
                  src={SPACECRAFT}
                  className="spacecraft-image"
                ></Image>
              </div>
            </ParallaxLayer>
            <MissionCard
              speed={0.5}
              offset={1}
              scroll={scroll}
              scrollValue={2.5}
              missionInfo={SPUTNIK}
            />
            <MissionCard
              offset={2.8}
              speed={0.5}
              scroll={scroll}
              scrollValue={4.1}
              missionInfo={SPUTNIK_2}
            />
            <MissionCard
              offset={4.1}
              speed={0.5}
              scroll={scroll}
              scrollValue={5.6}
              missionInfo={EXPLORER}
            />
            <MissionCard
              offset={5.9}
              speed={0.5}
              scroll={scroll}
              scrollValue={7.1}
              missionInfo={VOSTOK_1}
            />
            <MissionCard
              offset={7.18}
              speed={0.5}
              scroll={scroll}
              scrollValue={9}
              missionInfo={REACH_THE_MOON}
            />
            <MissionCard
              offset={9}
              speed={0.5}
              scroll={scroll}
              scrollValue={10.55}
              missionInfo={FIRST_SPACEWALK}
            />
            <MissionCard
              offset={10.8}
              speed={0.5}
              scroll={scroll}
              scrollValue={12.1}
              missionInfo={GEMINI}
            />
            <MissionCard
              offset={12.1}
              speed={0.5}
              scroll={scroll}
              scrollValue={13.9}
              missionInfo={APOLLO}
            />
            <ParallaxLayer
              offset={13.9}
              speed={0.5}
              style={{ justifyContent: "center", cursor: "pointer" }}
              onClick={() => scroll(0)}
            >
              <div className="apollo-container">
                <Image
                  alt="HALF_MOON"
                  src={HALF_MOON}
                  className="half-moon-image"
                ></Image>
                <Image
                  alt="APOLLO_SVG"
                  src={APOLLO_SVG}
                  className="apollo-image"
                ></Image>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
