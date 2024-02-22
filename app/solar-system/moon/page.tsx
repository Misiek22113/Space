"use client";
import Card from "@/components/Card/Card";
import "./MoonPage.scss";
import MOON from "../../../utils/MoonInfo";
import { motion } from "framer-motion";
import BACK_ARROW from "../../../public/moon-page/arrow.svg";
import STARS from "../../../public/moon-page/cosmos.jpg";
import Image from "next/image";
import Link from "next/link";

const MoonPage = () => {
  return (
    <div className="background-moon">
      <Image
        alt="background"
        src={STARS}
        className="background-img"
        priority
        placeholder="blur"
      />
      <div className="go-back-container">
        <Link href="/solar-system">
          <Image alt="moon img" src={BACK_ARROW} className="arrow-img"></Image>
        </Link>
      </div>
      <motion.div
        className="card-section"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "circOut", duration: 0.6 }}
      >
        <Card
          planet={MOON.planet}
          overview={MOON.overview}
          distance={MOON.distance}
          moons={MOON.weight}
          years={MOON.age}
          planetImg={MOON.planetImgPath}
          onRight={true}
          showInfo={false}
          lengthDays={false}
        />
      </motion.div>
    </div>
  );
};

export default MoonPage;
