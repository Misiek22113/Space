"use client";
import HomeInfo from "@/components/HomeInfo/HomeInfo";
import "./HomePage.scss";
import "../styles/button.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import Background from "../public/home-page/Home_Page_1920_dark.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <Image
        alt="homepage background"
        src={Background}
        className="background"
        placeholder="blur"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="home-page-content">
        <div className="home-info-section">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "circOut", duration: 0.6 }}
          >
            <HomeInfo />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "circOut", duration: 0.6, delay: 0.3 }}
          id="button-container"
        >
          <Link href="/solar-system">
            <motion.button
              className="circle-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              EXPLORE
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
