const Star = (
  color = "black",
  width = "18",
  height = "15",
  { filled = true, className = "" } = {}
) => {
  return (
    <svg
      width={width}
      id="star"
      height={height}
      viewBox="0 0 18 15"
      fill={filled ? color : "none"}
      stroke={color}
      className={`all-classes ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 0.5L11.0206 6.02786H17.5595L12.2694 9.44427L14.2901 14.9721L9 11.5557L3.70993 14.9721L5.73056 9.44427L0.440492 6.02786H6.97937L9 0.5Z" />
    </svg>
  );
};

export const Gold = (on = true) => {
  let color;
  if (on) {
    color = ["#FFDC64", "#FFC850"];
  } else {
    color = ["darkgrey", "lightgrey"];
  }
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512.001 512.001"
      space="preserve"
    >
      <path
        fill={color[0]}
        d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97 L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348 L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922 C516.225,203.78,511.532,189.337,499.92,188.26z"
      />
      <path
        fill={color[1]}
        d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26 c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979 c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z"
      />
    </svg>
  );
};

export default Star;
