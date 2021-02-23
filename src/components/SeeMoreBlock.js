import { Link } from "react-router-dom";
import "./SeeMoreBlock.css";
const SeeMoreBlock = ({ photoUrls, id, title, className = "" }) => {
  return (
    <>
      <div className={`${className} mini-block`}>
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
      </div>
    </>
  );
};

export default SeeMoreBlock;
