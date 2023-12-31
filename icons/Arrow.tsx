import React from "react";
type Config = {
  fill?: string;
};

const Arrow = ({ fill = "black" }: Config) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 37 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.5853 13.0607C36.171 12.4749 36.171 11.5251 35.5853 10.9393L26.0393 1.3934C25.4535 0.807609 24.5038 0.807609 23.918 1.3934C23.3322 1.97918 23.3322 2.92893 23.918 3.51472L32.4033 12L23.918 20.4853C23.3322 21.0711 23.3322 22.0208 23.918 22.6066C24.5038 23.1924 25.4535 23.1924 26.0393 22.6066L35.5853 13.0607ZM1.31134e-07 13.5L34.5246 13.5L34.5246 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default Arrow;
