import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./SeeMoreBlock.css";
const SeeMoreBlock = ({ photoUrls, id, title, className = "" }) => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "20vw" }}
        className={`${className} mini-block`}
      >
        <Link to={`/products/${id}`}>
          <img
            className="miniblock-image"
            src={photoUrls[0]}
            alt={`background for ${title} block`}
          />
        </Link>
        {/* <img
          className="miniblock-icon"
          src={logo}
          alt={`icon to ${title} field of website`}
        /> */}
      </motion.div>
    </>
  );
};

export default SeeMoreBlock;
