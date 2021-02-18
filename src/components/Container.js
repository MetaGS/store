import "./Container.css";

const Container = ({ style, extraClasses = "", children, className = "" }) => {
  return (
    <div className={`container ${extraClasses} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Container;
