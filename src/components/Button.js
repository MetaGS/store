import "./Button.css";

const Button = ({ text, type, className, onClick }) => {
  return (
    <>
      <button className={`btn ${type} ${className}`} onClick={onClick}>
        <span>{text}</span>
      </button>
    </>
  );
};

export default Button;
