import { motion } from "framer-motion";

const PlanetAnimation = ({
  fromLeft,
  children,
}: {
  fromLeft?: boolean;
  children: React.ReactNode;
}) => {
  const x = fromLeft ? -40 : 40;
  return (
    <motion.div
      className="sun-card"
      initial={{ x: x, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "circOut", duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default PlanetAnimation;
