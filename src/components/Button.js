import "./Button.css";

const Button = ({ text, type, className, onClick, disabled = false }) => {
  return (
    <>
      <button
        className={`btn ${type} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        <span>{text}</span>
      </button>
    </>
  );
};

export default Button;
