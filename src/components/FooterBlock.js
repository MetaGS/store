import "./FooterBlock.css";
import { Link } from "react-router-dom";

const FooterBlock = ({ header, list }) => {
  return (
    <>
      <div className=" ">
        <h5 className="footer-header">{header}</h5>
        <ul className="footer-links a-primary">
          {list.map(({ name, href = "" }) => {
            return (
              <li key={name}>
                <Link to={href}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FooterBlock;
