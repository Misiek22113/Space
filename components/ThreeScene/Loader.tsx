import Link from "next/link";
import Button from "../Button/Button";
import { Loader, useProgress } from "@react-three/drei";
import { PuffLoader } from "react-spinners";
import { motion } from "framer-motion";

const CustomLoader = () => {
  const { active, progress } = useProgress();

  return (
    <>
      {active == false && progress == 100 ? (
        <div className="background">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="home-content-container"
          >
            <div className="home-typography">
              <h1>THE SPACE</h1>
              <h2>WE LIVE IN</h2>
            </div>
            <Link href="/solar-system">
              <Button />
            </Link>
          </motion.div>
        </div>
      ) : (
        <div className="background">
          <div className="home-content-container">
            <PuffLoader color="#ffffff" size={100} />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomLoader;
