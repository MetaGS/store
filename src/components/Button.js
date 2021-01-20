import "./Button.css";

const Button = ({ text, type, className }) => {
  return (
    <>
      <button className={`btn ${type}`}>
        <span>{text}</span>
      </button>
    </>
  );
};

export default Button;
