import "./DescriptionP.css";

const Description = ({
  text,
  fontSize = "1.5rem",
  width = "auto",
  extraClass,
  className = "",
  children,
}) => {
  return (
    <div
      className={`description-p ${extraClass} ${className}`}
      style={{ fontSize, width }}
    >
      <p>
        {text}
        {children}
      </p>
    </div>
  );
};

export default Description;
