"use client";
import HomeInfo from "@/components/HomeInfo/HomeInfo";
import "./HomePage.scss";
import Button from "../styles/Button.module.scss";
import { motion } from "framer-motion";
import Background from "../public/home-page/Home_Page_1920_dark.jpg";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Image
        alt="homepage background"
        src={Background}
        className="background"
        fill
        quality={100}
        priority
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
          <Link href="/history">
            <motion.button
              className={`${Button.circle}`}
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
