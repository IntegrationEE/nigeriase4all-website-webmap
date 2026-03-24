// import React from 'react';

function IconDress(props) {
    const {width="14", color="#313131"} = props;

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width*65.979/42}
        version="1.1"
        viewBox="0 0 42 65.979"
      >
        <g fill={color} fillOpacity="1" transform="translate(-15 -3)">
          <path
            fill={color}
            fillOpacity="1"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M36 24.644L29.416 16V4h-5.505v12c0 6.028 4.004 19.958 4.004 19.958L16 67.98h40L44.085 35.96S48.089 22.027 48.089 16V4h-5.506v12z"
          ></path>
        </g>
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          transform="translate(-15 -3)"
        >
          <path
            stroke={color}
            d="M36 24.644L29.416 16V4h-5.505v12c0 6.028 4.004 19.958 4.004 19.958L16 67.98h40L44.085 35.96S48.089 22.027 48.089 16V4h-5.506v12z"
          ></path>
          <path
            stroke="#fff"
            strokeOpacity="1"
            d="M31.682 35.958L40.326 35.958"
          ></path>
        </g>
      </svg>
      );
}

export default IconDress;
