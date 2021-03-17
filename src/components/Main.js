import "./Main.css";
import { motion } from "framer-motion";

const mainVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    x: "100vw",
  },
};

const Main = ({ children, className = "" }) => {
  return (
    <motion.main
      variants={mainVariants}
      animate="visible"
      initial="hidden"
      className={`main ${className}`}
    >
      {children}
    </motion.main>
  );
};

export default Main;
