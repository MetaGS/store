import "./Button.css";

const Button = ({
  text,
  type = "",
  className = "",
  onClick,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <>
      <button
        {...props}
        className={`btn ${type} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        <span>{text ? text : children}</span>
      </button>
    </>
  );
};

export default Button;
