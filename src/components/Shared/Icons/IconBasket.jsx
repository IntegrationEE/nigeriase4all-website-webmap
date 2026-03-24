import React from 'react';

function IconBasket(props) {
    const {width, height=width*0.9299, color="#313131", invert=false, fill='#fff'} = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 44.714 48.083"
    >
      <g fill={invert?color:fill} fillOpacity="1" transform="translate(-13.643 -11.257)">
        <path d="M22.09 58.34L36 58.34 49.91 58.34 54.787 35.084 36 35.129 17.213 35.084z"></path>
        <path d="M56.608 35.15L57.357 27.478 15.092 27.478 15.092 35.15z"></path>
        <path d="M31.675 32.297l-9.19-14.737c-1.116-1.79-.83-3.983.638-4.898 1.468-.916 3.563-.207 4.68 1.582l11.133 18.053z"></path>
      </g>
      <g fill={fill} fillOpacity="1" transform="translate(-13.643 -11.257)">
        <path
          fillOpacity="1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22.09 58.34L36 58.34 49.91 58.34 54.787 35.084 36 35.129 17.213 35.084z"
        ></path>
        <path
          fillOpacity="1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M31.675 32.297l-9.19-14.737c-1.116-1.79-.83-3.983.638-4.898v0c1.468-.916 3.563-.207 4.68 1.582l11.133 18.053z"
        ></path>
        <g
          fillOpacity="1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M39.176 37.792L47.889 47.37"></path>
          <path d="M28.915 37.65L44.735 55.264"></path>
          <path d="M23.845 41.501L36.383 55.7"></path>
          <path d="M25.283 54.099L26.667 55.478"></path>
          <path d="M24.564 46.465L32.575 37.792"></path>
          <path d="M26.876 55.352L43.394 37.792"></path>
          <path d="M36.383 55.7L48.445 43.216"></path>
          <path d="M44.735 55.264L46.896 53.442"></path>
        </g>
        <circle cx="33.874" cy="29.837" r="0.886" fillOpacity="1"></circle>
        <path
          fillOpacity="0"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M36.383 27.427L57.357 27.427 57.357 35.092 14.643 35.092 14.643 27.427 27.849 27.427"
        ></path>
      </g>
    </svg>
  );
}

export default IconBasket;
